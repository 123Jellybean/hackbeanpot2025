import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");

  return (
    <div id="wd-account-navigation" >
      <ul
        style={{
          listStyle: "none",
          backgroundColor: "#0F4476",
          minHeight: "100vh",
          padding: 0,
          margin: 0,
        }}
      >
        <li>
          <Link
            className="text-white decoration-none text-center border-0 wd-account-navigation p-3"
            to={`/Ghibli/Account/Signin`}
            style={{ border: "1px solid #0F4476" }}
          >
            Signin
          </Link>
        </li>
        <li>
          <Link
            className="text-danger decoration-none wd-account-navigation-not-selec p-3"
            to={`/Ghibli/Account/Signup`}
            style={{ border: "1px solid #0F4476" }}
          >
            Signup
          </Link>
        </li>
        <li>
          <Link
            className="text-danger decoration-none wd-account-navigation-not-selec p-3"
            to={`/Ghibli/Account/Profile`}
            style={{ border: "1px solid #0F4476" }}
          >
            Profile
          </Link>
        </li>
        <li>
          {currentUser && (
            <Link
              className={`list-group-item text-danger decoration-none wd-account-navigation-not-selec p-3 ${active("Users")}`}
              to={`/Ghibli/Account/Users`}
              style={{ border: "1px solid #0F4476" }}
            >
              Users
            </Link>
          )}
        </li>
        <li>
          {currentUser && currentUser.role === "ADMIN" && (
            <Link
              to={`/Ghibli/Account/UsersManagement`}
              className={`list-group-item text-danger decoration-none wd-account-navigation-not-selec p-3 ${active("Users")}`}
              style={{ border: "1px solid #0F4476" }}
            >
              Management
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}
