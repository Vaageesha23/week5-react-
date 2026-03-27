import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import styles from "../styles/Auth.module.css";

const AuthContainer = ({ setAuth }) => {
  const [mode, setMode] = useState("signin");

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>🔮 Wizard Portal</h2>

      {mode === "signin" ? (
        <SignIn setAuth={setAuth} />
      ) : (
        <SignUp setAuth={setAuth} />
      )}

      <p
        className={styles.switch}
        onClick={() =>
          setMode(mode === "signin" ? "signup" : "signin")
        }
      >
        {mode === "signin"
          ? "New wizard? Sign Up"
          : "Already registered? Sign In"}
      </p>
    </div>
  );
};

export default AuthContainer;
