import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Search({
    courses = [], // Default to an empty array
    course = { title: "", description: "" }, // Default to an empty course object
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
    enrolling,
    setEnrolling,
    updateEnrollment,
}: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
    enrolling: boolean;
    setEnrolling: (enrolling: boolean) => void;
    updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [showAll, setShowAll] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    // Ensure filteredCourses operates on a valid array
    const filteredCourses = courses?.filter((c) =>
        c.title?.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">
                Dashboard

            </h1>
            <hr />
            <br />


            <div>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Search courses by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <h2 id="wd-dashboard-published">Published Courses ({filteredCourses.length})</h2>
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {filteredCourses.map((course) => (
                        <div
                            key={course._id}
                            className="wd-dashboard-course col"
                            style={{ width: "300px" }}
                        >
                            <div className="card rounded-3 overflow-hidden">
                                <Link
                                    to={`/Ghibli/Movies/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark"
                                >
                                    <img
                                        src={course.movie_banner || "default-banner.jpg"} // Fallback to default
                                        width="100%"
                                        height={160}
                                    />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            <button
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    updateEnrollment(
                                                        course._id,
                                                        !course.enrolled
                                                    );
                                                }}
                                                className={`btn ${course.enrolled
                                                    ? "btn-danger"
                                                    : "btn-success"
                                                    } float-end`}
                                            >
                                                {course.enrolled
                                                    ? "Unenroll"
                                                    : "Enroll"}
                                            </button>
                                            {course.title || "Untitled Course"} {/* Fallback title */}
                                        </h5>
                                        <p
                                            className="wd-dashboard-course-title card-text overflow-y-hidden"
                                            style={{ maxHeight: 100 }}
                                        >
                                            {course.description || "No description available."} {/* Fallback description */}
                                        </p>
                                        <button className="btn btn-primary">Go</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}