import Flex from "./Flex.tsx";
import Input from "./Input.tsx";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faIcons} from "@fortawesome/free-solid-svg-icons/faIcons";

const FooterChat = () => {
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} margin={'10px'}>
            <Input text={"Type a message..."} logo={'src/assets/paperclip.svg'}
                   change={() => null} click={() => null}/>

            <StyledIcon icon={faIcons} />
            <SendMessageButton>
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