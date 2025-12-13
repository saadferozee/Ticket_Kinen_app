import React, { useEffect, useState } from 'react';
import AuthContext from '../Contexts/AuthContext';
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import axios from 'axios';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }
    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const userDataSaveToDB = async (user) => {
        const isUserExistedRes = await axios.get(`http://localhost:3568/users/user/${user?.email}`);
        if (isUserExistedRes.data) {
            return
        } else {
            await axios.post('http://localhost:3568/users', user)
                .then(res => console.log(res.data))
                .catch(error => console.log(error));
        }
    }
    const updateUser = (name, photoURL) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL })
    }
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setAuthLoading(false);
        })
        return () => unsubscribe();
    }, [])
    useEffect(() => {
        if (!user) {
            return
        } else {
            axios.get(`http://localhost:3568/users/role/${user?.email}`)
                .then(response => {
                    setRole(response.data === import.meta.env.VITE_ADMIN_ROLE ? 'admin' : response.data === import.meta.env.VITE_VENDOR_ROLE ? 'vendor' : 'user');
                }).catch(error => console.log(error));
        }
    }, [user])

    const contexts = {
        user,
        role,
        authLoading,
        setUser,
        signUp,
        userDataSaveToDB,
        logIn,
        resetPassword,
        loginWithGoogle,
        updateUser,
        logOut
    }

    return (
        <AuthContext.Provider value={contexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;