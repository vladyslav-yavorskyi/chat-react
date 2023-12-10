import Flex from "../StyledComponents/Flex.tsx";
import Input from "../StyledComponents/Input.tsx";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faIcons} from "@fortawesome/free-solid-svg-icons/faIcons";
import {useState} from "react";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../firebase/firestore.ts";
import {useCurrentConversation} from "../../context/CurrentConversationContext.tsx";
import {useFirebase} from "../../context/FirebaseContext.tsx";

const FooterChat = () => {

    const [message, setMessage] = useState<string>('');
    const {user} = useFirebase();

    const {state} = useCurrentConversation();
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const sendMessage = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();

        // Add a new document with a generated id to the 'messages' collection
        const messagesCollection = collection(db, 'conversations', state.chat?.id as string, 'messages' );
        await addDoc(messagesCollection, { text: message, sender: user?.uid, timestamp: Date.now() });
        console.log('Message sent!')
        // Clear the input field
        setMessage('');
    };


    return (
        <Flex $justifyContent={"space-between"} $alignItems={"center"} $margin={'10px'}>
            <Input text={"Type a message..."} logo={'src/assets/paperclip.svg'}
                   width={"70vw"}   value={message}
                   change={handleInputChange} click={() => null}/>

            <StyledIcon icon={faIcons} />
            <SendMessageButton onClick={sendMessage}>
                <SendIcon src={'src/assets/paper.svg'} alt={'send'}/>
            </SendMessageButton>
        </Flex>
    );
};

const StyledIcon = styled(FontAwesomeIcon)`
  color: #686868;
    font-size: 20px;
    cursor: pointer;
    margin: 0 30px;
  
`;

const SendMessageButton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #44d6b5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1); 
  }
`;

const SendIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export default FooterChat;