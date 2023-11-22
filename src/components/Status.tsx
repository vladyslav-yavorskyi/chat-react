import styled from "styled-components";

const Status = ({text}: {text: string}) => {
    return <StatusText>{text}</StatusText>
};

const StatusText = styled.p`
  color: #686868;
  font-size: 14px;
  margin-left: 10px;

`;

export default Status;