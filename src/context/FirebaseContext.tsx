import React, {useContext, useEffect, useState} from 'react';
import "firebase/auth";
import { getAuth, onAuthStateChanged, User, Auth} from 'firebase/auth';
import {app} from "../firebase/firestore.ts";

interface FirebaseContextValue {
    auth: Auth;
    user: User | null;
}

const FirebaseContext = React.createContext<FirebaseContextValue | null>(null);

export const FirebaseProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const auth = getAuth(app);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            setUser(authUser);
        });

        return () => unsubscribe();
    }, [auth]);


    return (
        <FirebaseContext.Provider value={{auth, user}}>
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