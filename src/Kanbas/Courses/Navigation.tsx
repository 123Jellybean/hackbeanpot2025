import { Link, useLocation } from "react-router-dom";
export default function CoursesNavigation() {
  const links = [
    { label: "Home", path: "Home" },
    { label: "Modules", path: "Modules" },
    { label: "Zoom", path: "Zoom" },
    { label: "Piazza", path: "Piazza" },
    { label: "Assignments", path: "Assignments" },
    { label: "Quizzes", path: "Quizzes" },
    { label: "Grades", path: "Grades" },
    { label: "People", path: "People" },

  ];

  const { pathname } = useLocation();

  return (


    < div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0" >

      {
        links.map((link) => (
          <Link key={link.path} to={link.path} className={`list-group-item text-left border-0 
      ${pathname.includes(link.label) ? "text-black active" : "text-danger"}`}>
            {link.label}
          </Link>
        ))
      }
    </div >
  );
}
