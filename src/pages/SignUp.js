import LoginContent from "../components/login-content";
import LoginHeader from "../components/login-header";
import { GlobalStyled } from "../styles/global";
import { LoginContainerStyled } from "../styles/login-container.styled";

function SignUp() {
  return (
    <>
      <GlobalStyled />

      <LoginContainerStyled>
        <LoginHeader />
        <LoginContent entry={"Sign Up"} to={"/"} />
      </LoginContainerStyled>
    </>
  );
}

export default SignUp;
