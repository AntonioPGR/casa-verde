import styled from "styled-components";

const InputStyled = styled.input`
  :focus{
    outline: none;
    box-shadow: none;
  }
  padding: 20px;
`;

const ButtonStyled = styled.button`
  padding: 20px;
  font-family: 'Montserrat';
  background: ${props => props.disabled? "rgba(236, 236, 236)": "rgba(255, 203, 71, 1)"};
  color: ${ props => props.disabled? "rgba(108, 122, 137)":"rgba(255, 255, 255, 1)"};

`;

export { ButtonStyled, InputStyled };