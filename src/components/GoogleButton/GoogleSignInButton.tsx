import {useFirebase} from "../../context/FirebaseContext.tsx";
import {useNavigate} from "react-router-dom";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const GoogleSignInButton = () => {
    const firebase = useFirebase();
    const navigate = useNavigate();
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account'
        });
        try {
            const result = await signInWithPopup(firebase.auth, provider);
            console.log(result.user); // Optional: You can log the user information
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