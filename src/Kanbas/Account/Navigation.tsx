import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation">
      <ul style={{ listStyle: "none" }}>

        <li>
          <Link className="text-black decoration-none
   text-center border-0 wd-account-navigation"
            to={`/Kanbas/Account/Signin`}  >
            Signin
          </Link>
        </li>
        <li>
          <Link className="text-danger decoration-none wd-account-navigation-not-selec"
            style={{ paddingLeft: "8px", paddingRight: "8px" }}
            to={`/Kanbas/Account/Signup`}  > Signup  </Link>
        </li>
        <li>
          <Link className="text-danger decoration-none  wd-account-navigation-not-selec"
            style={{ paddingLeft: "8px" }}
            to={`/Kanbas/Account/Profile`} > Profile </Link>
        </li>
      </ul>
    </div>

  );
}
