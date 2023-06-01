import { LogoContentStyled } from "../../styles/login-styles/login-content.styled";
import LoginButton from "./login-btn";
import LoginFooter from "./login-footer";
import LoginForm from "./login-form";

function LoginContent({ entry, to }) {
  return (
    <LogoContentStyled>
      <div className="login__title">{entry}</div>

      <LoginForm entry={entry} />

      <LoginButton entry={entry} />

      <LoginFooter entry={entry} to={to} />
    </LogoContentStyled>
  );
}

export default LoginContent;
