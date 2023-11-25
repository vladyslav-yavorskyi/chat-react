import ChatRoom from "./ChatRoom.tsx";
import GoogleSignInButton from "../components/GoogleButton/GoogleSignInButton.tsx";
import {useFirebase} from "../context/FirebaseContext.tsx";



const SignIn = () => {

    const {isSignedIn} = useFirebase();

    return (
        <>
            {isSignedIn ? (<ChatRoom/>) : <GoogleSignInButton/>}
        </>
    );

};

export default SignIn;