import "./loginform.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FiLock } from "react-icons/fi";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import Logo from "../../img/logo.png";
const LoginForm = () => {
  return (
    <div className="loginform">
      <div className="login-container">
        <img src={Logo} alt="" />
        {/* <h2>Login Form</h2> */}
        <form action="">
          <div className="login-input">
            <span>
              <BsFillPersonFill />
            </span>
            <input type="text" placeholder="username" />
          </div>
          <div className="login-input">
            <span className="icon-color">
              <FiLock />
            </span>
            <input type="password" placeholder="password" />
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="checked"
              id="checkbox1"
              className="checkbox1"
            />
            <label htmlFor="checkbox1">keep me logged in</label>
          </div>
          <button type="submit" className="submit-btn">
            Log in
          </button>
          <div className="alt-login">
            <span>
              <FaGoogle className="alt-icon" />
            </span>
            <span>
              <FaFacebookF className="alt-icon" />
            </span>
          </div>
          <span className="forgotPassword">Forgot your password?</span>
          <div className="login-footer">
            <a href="#">Powered by iFlow Incasso software </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
