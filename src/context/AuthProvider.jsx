import React, { useEffect, useState } from 'react';
import { AuthContext } from './ContextCreateComponent';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import auth from '../config/firebase.config';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    console.log(user,loading)

    const googleProvider = new GoogleAuthProvider();





    const googleLoginIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }



    useEffect(() => {
        const unSebscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false)
            }
            else {
                console.log("User Sign Out")
            }

            return () => {
                unSebscribe()
            }
        })
    }, [])


    const authInFo = {
        user,
        setUser,
        loading,
        googleLoginIn
    }

    return (
        <AuthContext.Provider value={authInFo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;