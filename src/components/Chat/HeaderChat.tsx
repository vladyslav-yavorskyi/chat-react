import styled from "styled-components";
import Flex from "../StyledComponents/Flex.tsx";
import ImageProfile from "../StyledComponents/ImageProfile.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis, faPhone, faVideo} from "@fortawesome/free-solid-svg-icons";
import Status from "../StyledComponents/Status.tsx";
import {useCurrentConversation} from "../../context/CurrentConversationContext.tsx";
import {IUser} from "../GoogleButton/GoogleSignInButton.tsx";
import {useEffect, useState} from "react";
import {doc, getDoc } from "firebase/firestore";
import {db} from "../../firebase/firestore.ts";



const HeaderChat = () => {

    const {state} = useCurrentConversation();
    const [currentUser, setCurrentUser] = useState<IUser | null>(null);

    const getUserById = async (userId: string) => {
        const userDocRef = doc(db, 'users', userId);

        try {
            const userDocSnapshot = await getDoc(userDocRef);

            if (userDocSnapshot.exists()) {
                const userData = userDocSnapshot.data();
                setCurrentUser(userData as IUser);
            } else {
                console.log('User not found.');
                return null;
            }
        } catch (error) {
            console.error('Error getting user data:', error);
            throw error;
        }
    };

    useEffect(() => {
        if (state.id) {
            getUserById(state.id);
        }
    }, [state.id]);



    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} margin={'10px'}>
            <Flex flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                <ImageProfile imageUrl={currentUser?.photoUrl} active={true} size={"50px"}/>
                <Flex flexDirection={"column"}>
                    <UserName>{currentUser?.name}</UserName>
                    <Status text={'Online'}/>
                </Flex>
            </Flex>
            <Flex>
                <StyledIcon icon={faPhone}/>
                <StyledIcon icon={faVideo}/>
                <StyledIcon icon={faEllipsis}/>
            </Flex>
        </Flex>
    );
};



const UserName = styled.h3`
    font-size: 20px;
    font-weight: bold;
    color: #292c3e;
    margin-left: 10px;
    margin-bottom: 5px;
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: #686868;
  font-size: 20px;
  cursor: pointer;
  margin-right: 30px;
  `

export default HeaderChat;