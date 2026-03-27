import { useState } from "react";
import AuthContainer from "./components/AuthContainer";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <h1>🧙 Welcome Wizard!</h1>
      ) : (
        <AuthContainer setAuth={setIsAuthenticated} />
      )}
    </>
  );
};

export default App;

