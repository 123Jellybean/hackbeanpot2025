import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/Ghibli/Account/Profile");
  };

  return (
    <div
      className="wd-signup-screen"
      style={{
        backgroundColor: "#0F4476",
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3
          className="p-3"
          style={{
            fontFamily: "Courier New",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Sign up
        </h3>
        <input
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          id="wd-username"
          className="form-control"
          placeholder="username"
          style={{ width: "400px", margin: "0 auto" }}
        />
        <input
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          id="wd-password"
          type="password"
          className="form-control mt-2 mb-2"
          placeholder="password"
          style={{ width: "400px", margin: "0 auto" }}
        />
        <button
          onClick={signup}
          id="wd-signup-btn"
          className="btn btn-primary mb-2"
          style={{ width: "200px", margin: "0 auto" }}
        >
          Sign up
        </button>

        <br />
        <Link to="/Ghibli/Account/Signin" className="wd-signin-link">
          Sign in
        </Link>
        <img src="/images/meow.gif" style={{ marginTop: "20px" }}></img>
      </div>
    </div>
  );
}
