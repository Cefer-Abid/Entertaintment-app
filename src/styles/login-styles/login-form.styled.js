import styled from "styled-components";

export const LoginFormStyled = styled.form`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 15px;
  
  input {
    cursor: pointer;
    font-family: inherit;
    background: #161d2f;
    padding: 0 16px 18px 16px;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    border: none;
    outline: none;
    color: white;
    caret-color: #fc4747;

    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  input:focus,
  input:hover {
    border-bottom: 2px solid white;
  }
`;
