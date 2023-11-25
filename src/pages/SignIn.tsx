import ChatRoom from "./ChatRoom.tsx";
import GoogleSignInButton from "../components/GoogleButton/GoogleSignInButton.tsx";
import {useFirebase} from "../context/FirebaseContext.tsx";



const SignIn = () => {

    const {user} = useFirebase();

    return (
        <>
            {user ? (<ChatRoom/>) : <GoogleSignInButton/>}
        </>
    );

};

export default SignIn;