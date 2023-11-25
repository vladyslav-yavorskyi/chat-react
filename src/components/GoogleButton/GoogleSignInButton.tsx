import {useFirebase} from "../../context/FirebaseContext.tsx";
import {useNavigate} from "react-router-dom";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {db} from "../../firebase/firestore.ts";
import { doc, setDoc } from 'firebase/firestore';

export interface IUser {
    id: string;
    name: string | null;
    email: string | null;
    photoUrl: string | null;
}

const GoogleSignInButton = () => {
    const firebase = useFirebase();
    const navigate = useNavigate();

    const addUserToFirestore = async (userId: string, userData: IUser) => {
        const userDocRef = doc(db, 'users', userId);

        try {
            await setDoc(userDocRef, userData);
            console.log('User data added to Firestore');
        } catch (error) {
            console.error('Error adding user data to Firestore: ', error);
        }
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account'
        });
        try {
            const {user} = await signInWithPopup(firebase.auth, provider);
            console.log(user); // Optional: You can log the user information
            await addUserToFirestore(user.uid, {id: user.uid, name: user.displayName, email: user.email, photoUrl: user.photoURL})
            navigate('/home');
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    };

    return (
        <button onClick={handleGoogleSignIn}>Sign In with Google</button>
    );
};

export default GoogleSignInButton;