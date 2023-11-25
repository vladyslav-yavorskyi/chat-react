import Dashboard from "../components/Dashboard/Dashboard.tsx";
import Chats from "../components/Conversations/Chats.tsx";
import MainChat from "../components/Chat/MainChat.tsx";
import styled from "styled-components";
import {useFirebase} from "../context/FirebaseContext.tsx";

const ChatRoom = () => {

    const {pending} = useFirebase();
    console.log(pending, 'pending chatroom')
    return (
        <>
            {!pending ? (
                <>
                    <Container>
                        <Dashboard/>
                        <Chats/>
                        <MainChat/>
                    </Container>
                </>
            ) : (
                <p>Loading...</p>
            )}

        </>
    );
};

const Container = styled.div`

    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;

`

export default ChatRoom;