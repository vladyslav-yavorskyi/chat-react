import styled from "styled-components";
import HeaderChat from "./HeaderChat.tsx";
import BodyChat from "./BodyChat.tsx";
import FooterChat from "./FooterChat.tsx";

const MainChat = () => {
    return (
        <ChatWrapper>
            <HeaderChat />
            <BodyChat/>
            <FooterChat/>
        </ChatWrapper>
    );
};

const ChatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 75vw;
`;

export default MainChat;