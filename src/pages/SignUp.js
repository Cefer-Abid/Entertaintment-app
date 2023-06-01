import LoginContent from "../components/login/login-content";
import Logo from "../components/logo";
import { GlobalStyled } from "../styles/global";
import { LoginContainerStyled } from "../styles/login-styles/login-container.styled";

function SignUp() {
  return (
    <>
      <GlobalStyled />

      <LoginContainerStyled>
        <Logo />
        <LoginContent entry={"Sign Up"} to={"/"} />
      </LoginContainerStyled>
    </>
  );
}

export default SignUp;
