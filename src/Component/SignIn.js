import "./SignIn.css";

export default function SignIn() {
  return (
    <section className="SignIn_Component">
      <div className="sign-in">
        <div className="minimalism-login-page">
          <div className="container-1">
            <div className="group-11">
              <span className="welcome">Welcome</span>
              <br />
              <span className="we-are-glad-to-see-you-back-with-us">
                We are glad to see you back with us
              </span>
            </div>
            <div className="input-field">
              <div className="email">
                <div class="email-icon"></div>
                <input type="email" placeholder="Email" />
              </div>
              <div className="password">
                <input type="password" placeholder="Password" />
              </div>
            </div>
            <div className="forgot-password">Forgot Password ?</div>
            <div className="group-10">
              <button className="login">LOGIN</button>
            </div>
            <div className="or">
              <div className="line-1"></div>
              <span className="or-text">OR</span>
              <div className="line-2"></div>
            </div>
            <div className="group-9">
              <div className="google-icon"></div>
              <span className="login-with-google-1">Login with</span>
              <p className="login-with-google-2">Google</p>
            </div>
            <div className="container">
              <span className="dont-have-an-account">
                Don't have an account?
              </span>
              <span className="sign-up">SignUp</span>
            </div>
          </div>
          <div className="rectangle-143"></div>
      <div className="Sun_Image"></div>
        </div>
      </div>
    </section>
  );
}
