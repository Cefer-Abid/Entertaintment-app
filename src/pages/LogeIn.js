import LoginContent from "../components/login/login-content";
import Logo from "../components/logo";
import { GlobalStyled } from "../styles/global";
import { LoginContainerStyled } from "../styles/login-styles/login-container.styled";

function LogeIn() {
  return (
    <>
      <GlobalStyled />

      <LoginContainerStyled>
        <Logo />
        <LoginContent entry={"Login"} to={"/sign-up"} />
      </LoginContainerStyled>
    </>
  );
}

export default LogeIn;
