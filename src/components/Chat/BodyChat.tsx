import styled from "styled-components";
import {useEffect, useState} from "react";
import Message from "../StyledComponents/Message.tsx";
import {useCurrentConversation} from "../../context/CurrentConversationContext.tsx";
import {collection,  onSnapshot} from "firebase/firestore";
import {db} from "../../firebase/firestore.ts";
export interface IMessage {
    id: string;
    sender: string;
    text: string;
    time: string;
}
const BodyChat = () => {

    const [messages, setMessages] = useState<IMessage[]>([]);
    const {state} = useCurrentConversation();

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'conversations', state.chat?.id as string, 'messages'), (snapshot) => {
            const messages = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            console.log(messages)
            setMessages(messages as IMessage[]);
        });
        return () => unsubscribe();
    }, [state.chat?.id]);

    return (
        <BodyWrapper>
            {messages.map((message: IMessage, index: number) => <Message data={message} key={index} />)}
        </BodyWrapper>
    );
};

const BodyWrapper = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export default BodyChat;