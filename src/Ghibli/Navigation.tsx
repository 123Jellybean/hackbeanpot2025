import { Link, useLocation } from "react-router-dom";

export default function GhibliNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Profile", path: "/Ghibli/Account/Profile", img: "/images/lilguy.png" },
    { label: "Search", path: "/Ghibli/Search", img: "/images/calcifer.png" },
    { label: "Following", path: "/Ghibli/Following", img: "/images/guys.png" },
    { label: "Labs", path: "/Labs", img: "/images/noface.png" },
  ];

  return (
    <div
      id="wd-ghibli-navigation"
      style={{ width: 110 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <Link
        to="/Ghibli/Dashboard"
        className="list-group-item bg-black border-0 text-center text-white"
      >
        <img src="/images/totoro.png" width="75px" alt="Totoro" />
        Dashboard
      </Link>

      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`list-group-item bg-black text-center border-0
              ${pathname.includes(link.label)
              ? "text-danger bg-white"
              : "text-white bg-black"}`}
        >
          <img
            src={link.img}
            alt={link.label}
            className="fs-1"
            style={{ width: "40px", height: "50px" }} // Adjust the size as needed
          />
          <br />
          {link.label}
        </Link>
      ))}
    </div>
  );
}
