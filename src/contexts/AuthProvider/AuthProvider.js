import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const UserContext = createContext();

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [userInfo, setUserInfo] = useState(null);


    const emailRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const profileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const emailSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUserInfo(currentUser);
        })

        return () => {
            unsubscribe()
        }
    }, [auth])

    const authInfo = {
        userInfo,
        setUserInfo,
        emailRegistration,
        profileUpdate,
        emailSignIn
    }

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;