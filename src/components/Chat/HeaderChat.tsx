import styled from "styled-components";
import Flex from "../StyledComponents/Flex.tsx";
import ImageProfile from "../StyledComponents/ImageProfile.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis, faPhone, faVideo} from "@fortawesome/free-solid-svg-icons";
import Status from "../StyledComponents/Status.tsx";
import {useCurrentConversation} from "../../context/CurrentConversationContext.tsx";




const HeaderChat = () => {

    const {state} = useCurrentConversation();



    return (
        <Flex $justifyContent={"space-between"} $alignItems={"center"} $margin={'10px'}>
            <Flex $flexDirection={"row"} $justifyContent={"center"} $alignItems={"center"}>
                <ImageProfile imageUrl={state.coInterlocutor?.photoUrl} active={true} size={"50px"}/>
                <Flex $flexDirection={"column"}>
                    <UserName>{state.coInterlocutor?.name}</UserName>
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