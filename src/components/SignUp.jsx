import { useState, useEffect } from "react";
import styles from "../styles/Auth.module.css";

const SignUp = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setValid(
      name.length > 2 &&
      email.includes("@") &&
      password.length >= 6
    );
  }, [name, email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) setAuth(true);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>

      <input
        className={styles.input}
        placeholder="Wizard Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className={styles.input}
        placeholder="Owl Mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className={styles.input}
        placeholder="Secret Spell"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        disabled={!valid}
        className={`${styles.button} ${!valid && styles.disabled}`}
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
