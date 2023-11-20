import styled from "styled-components";

const InputStyled = styled.input`
  color: #d0d0d4;
  border: none;
  outline: none;
  padding: 10px;
  background-color: transparent;
  
  &::placeholder {
  color: #d0d0d4; 
}
`;
const ContainerStyled = styled.div<{width: string}>`
    display: flex;
    width: ${({width}) => width || '100%'};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #f8f7f7;
    border-radius: 20px;
    border: none;
`;

const IconStyled = styled.img`
    width: 40px;
    height: 40px;
    padding: 10px;
`;

interface InputProps {
    logo: string;
    text: string;
    click: () => void;
    change: () => void;
    width: string;
}
const Input = ({logo, text, click, change, width}: InputProps) => {
    console.log(logo)
    return (
        <ContainerStyled width={width}>
            <IconStyled onClick={() => click()} src={logo} alt="icon" />
            <InputStyled as="input" onChange={() => change()} placeholder={text} />
        </ContainerStyled>
    )
};

export default Input;