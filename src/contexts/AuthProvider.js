import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOutUser = () => {
        return signOut(auth);
    }

    const authValues = { user, setUser, signUpUser, signInUser, logOutUser };

    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;