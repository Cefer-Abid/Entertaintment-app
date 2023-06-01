import styled from "styled-components";

export const LoginButtonStyled = styled.button`
  margin-bottom: 24px;
  background: #fc4747;
  border-radius: 6px;
  padding: 15px 0;
  border: none;
  outline: none;
  color: white;
  font-family: inherit;
  cursor: pointer;

  &:hover {
    background: white;
    color: #161d2f;
  }
  &:active {
    background: #fc4747;
    color: white;
  }
`;
