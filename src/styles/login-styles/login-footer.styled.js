import styled from "styled-components";

export const LoginFooterStyled = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;

  span {
    font-family: inherit;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    color: #ffffff;
  }

  .login__footer--btn {
    color: #fc4747;
    cursor: pointer;
    user-select: none;
    text-decoration: none;
  }

  .login__footer--btn:hover {
    box-shadow: inset 0px -1px 0px #fc4747;
  }
  .login__footer--btn:active {
    box-shadow: none;
  }
`;
