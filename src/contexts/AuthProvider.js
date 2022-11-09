import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const user = {
        // uid: 's92lsl2lslsw0wlw02',
        name: 'Mobile user'
    };

    const authValues = { user };

    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;