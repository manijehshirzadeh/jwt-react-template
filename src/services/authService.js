// TODO: THis would be better in .env
const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;
console.log(BACKEND_URL);
const signup = async (userData) => {
  try {
    const response = await fetch(BACKEND_URL + "/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const json = await response.json();
    if (json.message) {
      throw new Error(json.message);
    }
    localStorage.setItem("token", json.token);
    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const signin = async (userData) => {
  try {
    const response = await fetch(BACKEND_URL + "/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const json = await response.json();
    if (json.error) {
      throw new Error(json.message);
    }
    localStorage.setItem("token", json.token);
    const user = JSON.parse(atob(json.token.split(".")[1]));
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getUser = () => {
  const token = localStorage.getItem("token");

  if (!token) return null; // noe one is logged in
  const data = JSON.parse(atob(token.split(".")[1]));
  return data.user;
};

const signout = () => {
  localStorage.removeItem("token");
};

export { signup, signin, getUser, signout };
