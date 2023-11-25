import styled from "styled-components";
import {useEffect, useState} from "react";
import Message from "../StyledComponents/Message.tsx";
import Conversation from "../../data/conversation.json"
export interface IMessage {
    sender: string;
    message: string;
    time: string;
}
const BodyChat = () => {

    const [messages, setMessages] = useState<IMessage[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch('../data/conversation.json');
                // console.log(response.json())
                //
                // const data = await response.json();
                // console.log(data)
                // setMessages(data)
                setMessages(Conversation as IMessage[])
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);

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