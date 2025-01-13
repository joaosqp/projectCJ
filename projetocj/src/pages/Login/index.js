import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="Home">
        <a className="nomeProjeto" onClick={toHome}>Home</a>
      </div>

      <div>
        <h1>Login Page</h1>
      </div>
    </>
  );
}

export default Login;