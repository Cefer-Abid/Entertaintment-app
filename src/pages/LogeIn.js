import LoginContent from "../components/login/login-content";
import LoginHeader from "../components/login/login-header";
import { GlobalStyled } from "../styles/global";
import { LoginContainerStyled } from "../styles/login-styles/login-container.styled";

function LogeIn() {
  return (
    <>
      <GlobalStyled />

      <LoginContainerStyled>
        <LoginHeader />
        <LoginContent entry={"Login"} to={"/sign-up"} />
      </LoginContainerStyled>
    </>
  );
}

export default LogeIn;
