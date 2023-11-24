import {IMessage} from "./BodyChat.tsx";
import styled from "styled-components";
import Flex from "./Flex.tsx";

const Message = ({data}: { data: IMessage }) => {
    return (
        <MessageWrapper sender={data.sender}>
            <MessageStyle sender={data.sender}>
                {data.message}
            </MessageStyle>
        </MessageWrapper>
    );
};

const MessageWrapper = styled(Flex)<{ sender: string }>`
    align-self: ${({sender}) => sender === 'You' ? 'flex-end' : 'flex-start'};
`;

const MessageStyle = styled.div<{sender: string}>`

  padding: 20px;
  border-radius: 50px;
  margin-bottom: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  
  ${({sender}) => sender === 'You' ? `
    background-color: #44d6b5;
    color: white;
  ` : `
    background-color: #e5e5ea;
    color: black;
  `}
    
`

export default Message;