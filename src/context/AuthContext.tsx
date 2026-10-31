import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  UserCredential
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db, googleProvider } from '../firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  loginWithEmail: (email: string, pass: string) => Promise<UserCredential>;
  registerWithEmail: (email: string, pass: string, displayName: string, organization?: string) => Promise<UserCredential>;
  loginWithGoogle: () => Promise<UserCredential>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithEmail = async (email: string, pass: string) => {
    return await signInWithEmailAndPassword(auth, email.trim(), pass);
  };

  const registerWithEmail = async (email: string, pass: string, displayName: string, organization?: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email.trim(), pass);
    if (cred.user) {
      if (displayName) {
        await updateProfile(cred.user, { displayName });
      }
      try {
        await setDoc(doc(db, 'users', cred.user.uid), {
          uid: cred.user.uid,
          email: cred.user.email || email.trim(),
          displayName: displayName || cred.user.email?.split('@')[0] || 'Mitra Bang Bin',
          organization: organization || 'Independen / Komunitas',
          createdAt: new Date().toISOString()
        });
      } catch (e) {
        console.warn('Notice: User profile saved in Auth; Firestore profile initialization optional:', e);
      }
    }
    return cred;
  };

  const loginWithGoogle = async () => {
    const cred = await signInWithPopup(auth, googleProvider);
    if (cred.user) {
      try {
        const userRef = doc(db, 'users', cred.user.uid);
        const existingDoc = await getDoc(userRef);
        if (!existingDoc.exists()) {
          await setDoc(userRef, {
            uid: cred.user.uid,
            email: cred.user.email || '',
            displayName: cred.user.displayName || 'Mitra Bang Bin',
            organization: 'Google Account',
            createdAt: new Date().toISOString()
          });
        }
      } catch (e) {
        console.warn('Notice: Firestore user sync optional:', e);
      }
    }
    return cred;
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        loginWithEmail,
        registerWithEmail,
        loginWithGoogle,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
