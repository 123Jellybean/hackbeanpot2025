import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");

  return (
    <div id="wd-account-navigation">
      <ul style={{ listStyle: "none" }}>

        <li>
          <Link className="text-black decoration-none
   text-center border-0 wd-account-navigation"
            to={`/Ghibli/Account/Signin`}  >
            Signin
          </Link>
        </li>
        <li>
          <Link className="text-danger decoration-none wd-account-navigation-not-selec"
            style={{ paddingLeft: "8px", paddingRight: "8px" }}
            to={`/Ghibli/Account/Signup`}  > Signup  </Link>
        </li>
        <li>
          <Link className="text-danger decoration-none  wd-account-navigation-not-selec"
            style={{ paddingLeft: "8px" }}
            to={`/Ghibli/Account/Profile`} > Profile </Link>
        </li>
        <li>
          {currentUser && (
            <Link style={{ paddingLeft: "8px", paddingRight: "8px" }} to={`/Ghibli/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link>)}
        </li>
        <li>
          {currentUser && currentUser.role === "ADMIN" && (
            <Link style={{ paddingLeft: "8px", paddingRight: "8px" }} to={`/Ghibli/Account/UsersManagement`} className={`list-group-item ${active("Users")}`}> Management </Link>)}
        </li>
      </ul>
    </div>

  );
}
