import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // const user = {displayName: 'Rashik'};

  const providerLoginGoogle = provider => {
    setLoading(true);
    return signInWithPopup(auth, provider)
  }

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const updateUserProfile = profile => {
    return updateProfile(auth.currentUser, profile)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      console.log('Inside auth state change', currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribed();
    }

  }, [])

  const authInfo = {
    user, 
    providerLoginGoogle, 
    logOut, 
    createUser, 
    signIn, 
    loading, 
    updateUserProfile
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;