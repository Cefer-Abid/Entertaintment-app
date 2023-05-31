import { Link } from "react-router-dom";
import { LoginFooterStyled } from "../styles/login-footer.styled";

function LoginFooter({ entry, to }) {
  return (
    <LoginFooterStyled>
      <span>
        {entry === "Login"
          ? " Don’t have an account?"
          : "Already have an account?"}
      </span>

      <Link to={to} className="login__footer--btn">
        {entry === "Login" ? "Sign Up" : "Login"}
      </Link>
    </LoginFooterStyled>
  );
}

export default LoginFooter;
