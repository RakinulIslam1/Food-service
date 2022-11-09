import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userProfile = (profile) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, profile)
    } 

    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }

    const goggle = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const gitHub = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(false);
            setUser(currentUser)
        })
        return () =>{
            unSubscribe();
        }
    }, [])

    const authInfo = {
      user,
      loading,
      createUser,
      userProfile,
      logIn,
      logOut,
      goggle,
      gitHub,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;