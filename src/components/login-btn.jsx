import { LoginButtonStyled } from "../styles/login-btn.styled";

function LoginButton({ entry }) {
  return (
    <LoginButtonStyled>
      {entry === "Login" ? " Login to your account" : "Create an account"}
    </LoginButtonStyled>
  );
}

export default LoginButton;
