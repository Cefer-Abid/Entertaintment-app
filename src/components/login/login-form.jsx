import { LoginFormStyled } from "../../styles/login-styles/login-form.styled";

function LoginForm({ entry }) {
  const display = entry === "Login" && "hidden";
  return (
    <LoginFormStyled>
      <input type="email" placeholder="Email address" />
      <input type="password" placeholder="Password" />
      <input
        className={display}
        type="password"
        placeholder="Repeat password"
      />
    </LoginFormStyled>
  );
}

export default LoginForm;
