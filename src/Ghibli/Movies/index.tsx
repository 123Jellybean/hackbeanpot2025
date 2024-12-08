//import { courses } from "../Database";
import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { Link, useLocation } from "react-router-dom";


export default function Movies({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const course = courses.find((course) => course.id === cid);


    return (
        <div id="wd-courses">
            <h2 className="text-danger">

                {course && course.name}
            </h2>


            <div className="d-flex">
                <div className="d-none d-md-block">

                </div>
                <div className="flex-fill">

                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="People" element={<PeopleTable />} />
                    </Routes>
                </div></div>
        </div>
    );
}
