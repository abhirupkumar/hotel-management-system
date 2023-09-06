import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const { isLoaded, isSignedIn, user } = useUser();
    const navigate = useNavigate();

    if (!isLoaded || !isSignedIn) {
        return null;
    }
    if (!isSignedIn) {
        navigate('/sign-in');
    }
    const value = {
        currentUser,
        login,
        singnup,
        logout,
        userInfo,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}