import LazyImage from "../helpers/lazy-image";
import logoImg from "../img/logo-white.png";
export default function Login() {
  return (
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <div className="loginbox">
            <div className="login-left">
              <LazyImage className="img-fluid" src={logoImg} alt="Logo" />
            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Login</h1>
                <p className="account-subtitle">Access to our dashboard</p>

                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <button className="btn btn-primary w-100" type="submit">
                    Login
                  </button>
                </div>

                <div className="text-center forgotpass">
                  <a href="forgot-password.html">Forgot Password?</a>
                </div>
                <div className="login-or">
                  <span className="or-line"></span>
                  <span className="span-or">or</span>
                </div>

                <div className="social-login">
                  <span>Login with</span>
                  <a href="#" className="facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" className="google">
                    <i className="fa-brands fa-google"></i>
                  </a>
                </div>

                <div className="text-center dont-have">
                  Don’t have an account? <a href="register.html">Register</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
