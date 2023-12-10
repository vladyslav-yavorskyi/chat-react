import styled from "styled-components";
import ImageProfile from "../StyledComponents/ImageProfile.tsx";
import Status from "../StyledComponents/Status.tsx";
import Flex from "../StyledComponents/Flex.tsx";
import {useCurrentConversation} from "../../context/CurrentConversationContext.tsx";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase/firestore.ts";
import {useFirebase} from "../../context/FirebaseContext.tsx";
import {IUser} from "../GoogleButton/GoogleSignInButton.tsx";
import {IChat} from "./Chats.tsx";

const ChatCard = ({width, chat}: {width: string, chat: IChat}) => {

    const [coInterlocutor, setCoInterlocutor] = useState<IUser>({} as IUser);
    const {dispatch} = useCurrentConversation();
    const {user} = useFirebase();

    useEffect( () => {
        const getUser = async () => {
            const coInterlocutorId = chat.participants.filter(member => member !== user?.uid)[0];
            const userConversations =  collection(db, 'users',);

            try {
                const querySnapshot = await getDocs(userConversations);
                const results = querySnapshot.docs.map(doc => doc.data()).filter((doc) => doc.id === coInterlocutorId);
                setCoInterlocutor(results[0] as IUser);
            } catch (error) {
                console.error('Error retrieving users from Firestore: ', error);
            }

        };
        getUser();
    }, [chat, user?.uid]);

    const handleClick = () => {
        dispatch({type: 'SET_CONVERSATION', payload: {chat, coInterlocutor: coInterlocutor}})
    }

    return (
        <CardWrapper width={width} onClick={() => handleClick()}>
            <CardHeader>
                <ImageProfile imageUrl={coInterlocutor.photoUrl} active={false} size={"50px"}/>
                <Flex $flexDirection={'column'}>
                    <CardTitle>{coInterlocutor.name}</CardTitle>
                    <Status text={'Offline'}/>
                </Flex>
            </CardHeader>
            <CardBody>
                <LastMessage>Hey, how are you? How's your mom...</LastMessage>
                <UnreadMessages>3</UnreadMessages>
            </CardBody>
        </CardWrapper>
    );
};

const CardWrapper  = styled.div<{width: string}>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: ${({width}) => width || '100%'};
    height: 300px;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: transform 0.3s ease-in-out; 

    &:hover {
      transform: scale(1.05); 
    }
    `;

const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    `;
const CardTitle = styled.h3`
  color: #292c3e;
  font-size: 20px;
  margin-left: 10px;
`;

const CardBody = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;
`;

const LastMessage = styled.p`
  color: #292c3e;
  font-size: 14px;
`

const UnreadMessages = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #44d6b5;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
` ;



export default ChatCard;