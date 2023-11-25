import Dashboard from "../components/Dashboard/Dashboard.tsx";
import Chats from "../components/Conversations/Chats.tsx";
import MainChat from "../components/Chat/MainChat.tsx";
import styled from "styled-components";

const ChatRoom = () => {
    return (
        <>
            <Container>
                <Dashboard/>
                <Chats/>
                <MainChat/>
            </Container>
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