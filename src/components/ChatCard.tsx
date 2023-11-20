import styled from "styled-components";


const CardWrapper  = styled.div<{width: string}>`
    display: flex;
    flex-direction: column;
    width: ${({width}) => width || '100%'};
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  
    `;

const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    `;
const CardTitle = styled.h3`
  color: #292c3e;
`

const CardImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
`

const CardBody = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;
`;

const LastMessage = styled.p`
  color: #292c3e;
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


const ChatCard = ({width}: {width: string}) => {
    return (
        <CardWrapper width={width}>
            <CardHeader>
                <CardImage src="https://picsum.photos/200" alt="user"/>
                <CardTitle>Donald Johnson</CardTitle>
            </CardHeader>
            <CardBody>
                <LastMessage>Hey, how are you?</LastMessage>
                <UnreadMessages>3</UnreadMessages>
            </CardBody>
        </CardWrapper>
    );
};

export default ChatCard;