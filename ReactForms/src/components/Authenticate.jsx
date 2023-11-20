import React, { useState } from "react";

const Authenticate = ({ token }) => {
  const [authMessage, setAuthMessage] = useState("");

  const handleAuthenticate = async () => {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.token}`,
          },
        }
      );

      const result = await response.json();
      setAuthMessage(result.message);
    } catch (error) {
      setAuthMessage("Error during authentication");
    }
  };

  return (
    <>
      <h2>Authenticate</h2>
      <p>{token.message}</p>
      <p>{token.token}</p>
      <button id="authButton" onClick={handleAuthenticate}>Authenticate</button>
      {authMessage && <p>{authMessage}</p>}
    </>
  );
};

export default Authenticate;
