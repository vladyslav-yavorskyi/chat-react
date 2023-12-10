import styled from 'styled-components';
import ImageProfile from "../StyledComponents/ImageProfile.tsx";
import {useSearch} from "../../context/ModalContext.tsx";
import { addDoc, collection } from 'firebase/firestore';
import {db} from "../../firebase/firestore.ts";
import {useFirebase} from "../../context/FirebaseContext.tsx";

const UserContainer = styled.li`
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
    cursor: pointer;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.strong`
  font-size: 1.2em;
`;


const UserComponent = ({ name, imgUrl, id }: {name: string, imgUrl: string, id: string}) => {

    const { setIsOpen} = useSearch();
    const {user} = useFirebase()

    const handleClick = async () => {
        const conversationsCollection = collection(db, 'conversations');
        await addDoc(conversationsCollection, {
            participants: [id, user?.uid].filter(Boolean),
            messages: [],
        });
        setIsOpen((prev) => !prev)
    };


    return (
        <UserContainer onClick={handleClick}>
            <UserInfo>
                <ImageProfile imageUrl={imgUrl} active={false} size={'40px'}/>
                <UserName>{name}</UserName>
            </UserInfo>
        </UserContainer>
    );
};

export default UserComponent;