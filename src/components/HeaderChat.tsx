import styled from "styled-components";
import Flex from "./Flex.tsx";
import ImageProfile from "./ImageProfile.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis, faPhone, faVideo} from "@fortawesome/free-solid-svg-icons";
import Status from "./Status.tsx";



const HeaderChat = () => {
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} margin={'10px'}>
            <Flex flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                <ImageProfile imageUrl={"https://picsum.photos/200"} active={true} size={"50px"}/>
                <Flex flexDirection={"column"}>
                    <UserName>Steve Williams</UserName>
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