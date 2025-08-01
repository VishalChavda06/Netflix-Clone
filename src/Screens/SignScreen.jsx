import "../CSS/SignScreen.css";
import { useRef } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../.firebase/firebase"; // this is your firebase initialized app

const SignScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const auth = getAuth(app); // ✅ get the auth instance using the modular way

  // ✅ Register Function
  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        console.log("User Registered:", userCredential.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // ✅ Sign In Function
  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        console.log("User Signed In:", userCredential.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>Sign In</button>
      </form>
      <h4>
        <span className="signScreen_gray">New to Netflix? </span>
        <span className="signScreen_link" onClick={register}>Sign up now.</span>
      </h4>
      <div className="signScreen_gradient"></div>
    </div>
  );
};

export default SignScreen;
