import Input from "../StyledComponents/Input.tsx";
import ChatCard from "./ChatCard.tsx";
import styled from "styled-components";
import Flex from "../StyledComponents/Flex.tsx";

const Chats = () => {
    return (
        <ChatsWrapper>
            <Input text={"Enter for search..."} width={"25vw"} logo={'src/assets/iconsearch.svg'}
                   change={() => null} click={() => null}/>
            <ChatSelectorContainer>
                <Text>Sort By: </Text>
                <Flex flexDirection={'row'} alignItems={"center"}>
                    <Text>Add New </Text>
                    <AddButton>+</AddButton>
                </Flex>
            </ChatSelectorContainer>
            <ChatCardWrapper>
                {Array(6).fill(0).map((_, i) => <ChatCard width={'25vw'} key={i} />)}
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