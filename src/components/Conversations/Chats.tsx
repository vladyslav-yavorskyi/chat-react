import Input from "../StyledComponents/Input.tsx";
import ChatCard from "./ChatCard.tsx";
import styled from "styled-components";
import Flex from "../StyledComponents/Flex.tsx";
import { collection, getDocs } from 'firebase/firestore';
import {useEffect, useState} from "react";
import {db} from "../../firebase/firestore.ts";
import {IUser} from "../GoogleButton/GoogleSignInButton.tsx";
import {useFirebase} from "../../context/FirebaseContext.tsx";

const Chats = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const {user} = useFirebase();
    const getAllUsers = async () => {
        const usersCollection = collection(db, 'users');

        try {
            const querySnapshot = await getDocs(usersCollection);
            const users = querySnapshot.docs
                .filter(doc => doc.id !== user?.uid)
                .map(doc => ({
                    id: doc.id,
                    name: doc.data().name,
                    email: doc.data().email,
                    photoUrl: doc.data().photoUrl
                }));
            setUsers(users);
            console.log('All Users:', users);
            console.log(user?.uid)
        } catch (error) {
            console.error('Error retrieving users from Firestore: ', error);
        }
    };

    useEffect(() => {
        getAllUsers();
    }, []);
    return (
        <ChatsWrapper>
            <Input text={"Enter for search..."} width={"25vw"} logo={'src/assets/iconsearch.svg'}
                   change={() => null} click={() => null}/>
            <ChatSelectorContainer>
                <Text>Sort By: </Text>
                <Flex $flexDirection={'row'} $alignItems={"center"}>
                    <Text>Add New </Text>
                    <AddButton>+</AddButton>
                </Flex>
            </ChatSelectorContainer>
            <ChatCardWrapper>
                {users.map(user => (
                    <ChatCard key={user.id} width={'25vw'} user={user} />
                ))}
            </ChatCardWrapper>
        </ChatsWrapper>
    );
};

const Text = styled.p<{size?: string}>`
  font-size: ${({size}) => size || '13px'};
  font-weight: 500;
  color: #d0d1d7;
`

const ChatsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30vw;
    background-color: #ffffff;
    overflow-y: auto;
    margin-top: 20px;

`;

const ChatCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChatSelectorContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 10px 0;
`;

const AddButton = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #44d6b5;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
`

export default Chats;