import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";

const SigninForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  console.log(props);
  const _handleChange = (event) => {
    setMessage("");
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const _handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await authService.signin(formData);
      props.setUser(response.user);
      navigate("/");
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
  };

  return (
    <main>
      <h1>Log in</h1>
      <p>{message}</p>
      <form autoComplete="off" onSubmit={_handleSubmit}>
        <label>
          Username:
          <input
            autoComplete="off"
            value={formData.username}
            name="username"
            onChange={_handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            autoComplete="off"
            value={formData.password}
            name="password"
            onChange={_handleChange}
          />
        </label>
        <button>Log in</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </form>
    </main>
  );
};

export default SigninForm;
