// import {createContext, useContext, useEffect, useState} from 'react';
// import {useFirebase} from "./FirebaseContext.tsx";
//
//
// export const AuthContext = createContext<AuthContextValue | null>(null);
//
// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//
//     const { auth } = useFirebase();
//     useEffect(() => {
//         auth.onAuthStateChanged((currentUser) => {
//             setUser({ pending: false, isSignedIn: !!currentUser });
//         });
//     }, []);
//     return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
// };
//
// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error('useAuth must be used within a AuthProvider');
//     }
//     return context;
// }