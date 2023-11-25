import styled from "styled-components";
import HeaderChat from "./HeaderChat.tsx";
import BodyChat from "./BodyChat.tsx";
import FooterChat from "./FooterChat.tsx";
import {useCurrentConversation} from "../../context/CurrentConversationContext.tsx";

const MainChat = () => {
    const {state} = useCurrentConversation();

    return (
        <>
            {state.id ? (
                <ChatWrapper>
                    <HeaderChat />
                    <BodyChat />
                    <FooterChat />
                </ChatWrapper>
            ) : (
                <p>choose conversation</p>
            )}
        </>

    );
};

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 75vw;
`;

export default MainChat;