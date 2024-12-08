import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Following({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void;
        enrolling: boolean;
        setEnrolling: (enrolling: boolean) => void;
        updateEnrollment: (courseId: string, enrolled: boolean) => void
    }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [showAll, setShowAll] = useState(true);



    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">
                Following

                <button
                    onClick={() => setEnrolling(!enrolling)}
                    className="float-end btn btn-primary"
                >
                    {enrolling ? "My Courses" : "All Courses"}
                </button>

            </h1>
            <hr />
            <br />

            {currentUser?.role === "FACULTY" && (
                <div>
                    <input
                        value={course.title}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, title: e.target.value })}
                    />

                    <textarea
                        value={course.description}
                        className="form-control"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    />
                    <br />

                    <h5>
                        New Course
                        <button
                            className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse}
                        >
                            Add
                        </button>

                        <button
                            className="btn btn-warning float-end me-2"
                            onClick={updateCourse}
                            id="wd-update-course-click"
                        >
                            Update
                        </button>
                    </h5>
                    <hr />
                </div>
            )}

            {currentUser?.role === "STUDENT" && (
                <div>
                    <button
                        style={{ float: "right" }}
                        className="btn btn-primary"
                        onClick={() => setShowAll((prev) => !prev)}
                    >
                        Enrollments
                    </button>
                </div>
            )}

            <div id="wd-dashboard-courses" className="row">

                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (

                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link
                                    to={`/Ghibli/Movies/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark"
                                >
                                    <img src={course.movie_banner} width="100%" height={160} />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">


                                            <button
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    updateEnrollment(course._id, !course.enrolled);
                                                }}
                                                className={`btn ${course.enrolled ? "btn-danger" : "btn-success"
                                                    } float-end`}
                                            >
                                                {course.enrolled ? "Unenroll" : "Enroll"}
                                            </button>

                                            {course.title}

                                        </h5>
                                        <p
                                            className="wd-dashboard-course-title card-text overflow-y-hidden"
                                            style={{ maxHeight: 100 }}
                                        >
                                            {course.description}
                                        </p>

                                        {currentUser?.role === "FACULTY" && (
                                            <div style={{ float: "right", display: "flex" }}>
                                                <button
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        deleteCourse(course._id);
                                                    }}
                                                    className="btn btn-danger float-end"
                                                    id="wd-delete-course-click"
                                                >
                                                    Delete
                                                </button>

                                                <button
                                                    id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        )}
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