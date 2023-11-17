import React from "react";
import { useState } from "react";

const SignUpForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("This is a Test!");
  }

  return (
    <>
      <h2>Sign Up!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </label>
        <label>
          Password:{" "}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <button>Submit!</button>
      </form>
    </>
  );
};

export default SignUpForm;
