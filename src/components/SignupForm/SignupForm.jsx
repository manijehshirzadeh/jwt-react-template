import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as authService from "../../services/authService";

const SignupForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    passwordConfirmation: "",
  });

  const _handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const _handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await authService.signup(userData);

      props.setUser(response.user); // this will modify the state in the App component
      navigate("/"); // upon redirect you will see the "Dashboard" page
    } catch (error) {
      console.error(error);
      setMessage(error.message);
    }
  };

  const { username, password, passwordConfirmation } = userData;

  const isValid = username && password && password === passwordConfirmation;
  const isInvalid = !isValid;

  return (
    <main>
      <h1>Sign Up</h1>
      <p>{message}</p>
      <form onSubmit={_handleSubmit}>
        <label>
          Username:
          <input name="username" value={username} onChange={_handleChange} />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={_handleChange}
          />
        </label>
        <label>
          Confirm password:
          <input
            type="password"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={_handleChange}
          />
        </label>
        <button disabled={isInvalid}>Sign Up</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </form>
    </main>
  );
};

export default SignupForm;
