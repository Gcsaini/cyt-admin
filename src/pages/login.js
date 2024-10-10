import { getDecodedToken, setToken } from "../helpers/auth";
import LazyImage from "../helpers/lazy-image";
import logoImg from "../img/logo-white.png";
import { postData } from "../helpers/actions";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isValidMail } from "../helpers/validators";
import { loginUrl } from "../helpers/urls";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (email.length < 7 || !isValidMail(email)) {
      setError("Please enter valid email address");
      return;
    }
    if (password.length < 6) {
      setError("Please enter valid password");
      return;
    }
    const value = {
      email,
      password,
    };

    try {
      setLoading(true);
      const response = await postData(loginUrl, value);
      if (response.status) {
        setToken(response.token, true);
        const data = getDecodedToken(response.token);
        if (data.role === 1) {
          navigate("/home");
        } else {
          navigate("/not-found");
        }
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError(error.response.data.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    const data = getDecodedToken();
    if (data) {
      if (data.role === 1) {
        navigate("/home");
      }
    }
  }, []);
  return (
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <div className="loginbox">
            <div className="login-left">
              <LazyImage className="img-fluid" src={logoImg} alt="Logo" />
            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Login</h1>
                <p className="account-subtitle">Access to our dashboard</p>

                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <button
                    className="btn btn-primary w-100"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
