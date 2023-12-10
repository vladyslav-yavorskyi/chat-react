import styled from "styled-components";



interface InputProps {
    logo: string;
    text: string;
    click: () => void;
    change: (event: React.ChangeEvent<HTMLInputElement>) => void;
    width?: string;
    value: string;
}
const Input = ({logo, text, click, change, width, value}: InputProps) => {
    return (
        <ContainerStyled width={width as string}>
            <IconStyled onClick={() => click()} src={logo} alt="icon" />
            <InputStyled as="input" value={value} onChange={change} placeholder={text} />
        </ContainerStyled>
    )
};

const InputStyled = styled.input`
  color: #7d7d80;
  border: none;
  outline: none;
  padding: 10px;
  background-color: transparent;
  font-size: 16px;

  &::placeholder {
    color: #d0d0d4;
  }
`;
const ContainerStyled = styled.div<{width: string}>`
    display: flex;
    width: ${({width}) => width || '100%'};
    flex-direction: row;
    align-items: center;
    background: #f8f7f7;
    border-radius: 20px;
    padding-left: 30px;
    border: none;
`;

const IconStyled = styled.img`
    width: 40px;
    height: 40px;
    padding: 10px;
`;

export default Input;