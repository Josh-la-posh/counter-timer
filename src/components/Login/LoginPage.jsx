import LoginForm from "./LoginForm";
import "./LoginPage.css";

export default function LoginPage({userName, setUserName, password, setPassword, setUser}) {
  return (
    <div className="login">
      <div className="logo login__logo">CD Timer</div>
      <div className="login__container">
        <div className="login__content">
          <div className="login__header">
            Welcome to the count down app <br />{" "}
            <span>We are happy to have you back</span>
          </div>
          <div className="form__container">
            <p>Fill the form below to continue</p>
            <LoginForm userName={userName} setUserName={setUserName} password={password} setPassword={setPassword} setUser={setUser}/>
          </div>
        </div>
      </div>
    </div>
  );
}
