import React, {useContext, useEffect, useState} from 'react';
import "firebase/auth";
import { getAuth, onAuthStateChanged, User, Auth} from 'firebase/auth';
import {app} from "../firebase/firestore.ts";

interface AuthContextValue {
    isSignedIn: boolean;
    pending: boolean;

}
interface FirebaseContextValue {
    auth: Auth;
    user: User | null;
    AuthState: AuthContextValue;
}


const FirebaseContext = React.createContext<FirebaseContextValue | null>(null);

export const FirebaseProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const [isSignIn, setIsSignIn] = useState<AuthContextValue>({
        isSignedIn: false,
        pending: true,
    });
    const auth = getAuth(app);

    useEffect(() => {

        auth.onAuthStateChanged((currentUser) => {
            setIsSignIn({ pending: false, isSignedIn: !!currentUser });
            console.log('onAuthStateChanged')
        });

        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            console.log('unsubscribe')
            setUser(authUser);
        });

        return () => unsubscribe();
    }, [auth]);


    return (
        <FirebaseContext.Provider value={{auth, user, AuthState: {...isSignIn}}}>
            {children}
        </FirebaseContext.Provider>
    );

}

export const useFirebase = () => {
    const context = useContext(FirebaseContext);
    if (!context) {
        throw new Error("useFirebase must be used within a FirebaseProvider");
    }
    return context;
}

export default FirebaseContext;