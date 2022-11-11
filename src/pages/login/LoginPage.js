import LoginForm from "../../components/login/LoginForm";
import useToken from "../../api/useToken";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [token, setToken] = useToken();
  const [section, setSection] = useState();

  function logoutSection() {
    return (
      <div>
        <p>You already logged in</p>
        <button onClick={() => setToken(null)}>Logout</button>
      </div>
    );
  }

  useEffect(() => {
    if (token) {
      setSection(logoutSection());
    } else {
      setSection(<LoginForm setToken={setToken} />);
    }
  }, [token]);

  return (
    <div>
      <h1>Login</h1>
      {section}
    </div>
  );
}
