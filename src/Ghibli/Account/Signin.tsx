import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = async () => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Ghibli/Home");
  };

  return (
    <div
      id="wd-signin-screen"
      style={{
        backgroundColor: "#0F4476",
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h3
          className="p-3"
          style={{
            fontFamily: "Courier New",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Sign in
        </h3>
        <input
          defaultValue={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
          id="wd-username"
          placeholder="username"
          className="form-control"
          style={{ width: "400px", margin: "0 auto" }}
        />
        <input
          defaultValue={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          id="wd-password"
          placeholder="password"
          type="password"
          className="form-control mt-2 mb-2"
          style={{ width: "400px", margin: "0 auto" }}
        />
        <button
          onClick={signin}
          id="wd-signin-btn"
          className="btn btn-primary"
          style={{ width: "200px", margin: "0 auto" }}
        >
          Sign in
        </button>
        <br />
        <Link id="wd-signup-link" className="mt-2" to="/Ghibli/Account/Signup">
          Sign up
        </Link>
        <img src="/images/meow.gif" style={{ marginTop: "20px" }}></img>
      </div>
    </div>
  );
}
