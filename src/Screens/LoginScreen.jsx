import "../CSS/LoginScreen.css";
import { useState } from 'react';
import SignScreen from '../Screens/SignScreen';

const LoginScreen = () => {

  // SignIn 
  const [SignIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img className="loginScreen_logo" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
        <button onClick={() => setSignIn(true)} className="loginScreen_button">Sign In</button>
        <div className="loginScreen_gradient"></div>

        {/* loginScreen_body */}
        <div className="loginScreen_body">
          {SignIn ? (
            < SignScreen/>
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className="loginScreen_input">
                <form>
                  <input type="email" placeholder="Email address" />
                  <button onClick={() => setSignIn(true)} className="loginScreen_getStarted">GET STARTED</button>
                </form>
              </div>
            </>
          )}

        </div>
      </div >
    </div >
  )
}

export default LoginScreen
