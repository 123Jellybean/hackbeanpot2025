import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Following({ movies, movie, setMovie, addNewCourse,
    deleteCourse, updateCourse, following, setFollowing, updateEnrollment }: {
        movies: any[]; movie: any; setMovie: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void;
        following: boolean;
        setFollowing: (following: boolean) => void;
        updateEnrollment: (courseId: string, enrolled: boolean) => void
    }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [showAll, setShowAll] = useState(true);



    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">
                Following

                <button
                    onClick={() => setFollowing(!following)}
                    className="float-end btn btn-primary"
                >
                    {following ? "My Movies" : "All Movies"}
                </button>

            </h1>
            <hr />
            <br />

            {currentUser?.role === "FACULTY" && (
                <div>
                    <input
                        value={movie.title}
                        className="form-control mb-2"
                        onChange={(e) => setMovie({ ...movie, title: e.target.value })}
                    />

                    <textarea
                        value={movie.description}
                        className="form-control"
                        onChange={(e) => setMovie({ ...movie, description: e.target.value })}
                    />
                    <br />

                    <h5>
                        New Movie
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


            <div id="wd-following-movies" className="row">

                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {movies.map((movie) => (

                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link
                                    to={`/Ghibli/Movies/${movie._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark"
                                >
                                    <img src={movie.movie_banner} width="100%" height={160} />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">


                                            <button
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    updateEnrollment(movie._id, !movie.enrolled);
                                                }}
                                                className={`btn ${movie.enrolled ? "btn-danger" : "btn-success"
                                                    } float-end`}
                                            >
                                                {movie.enrolled ? "Unfollow" : "Follow"}
                                            </button>

                                            {movie.title}

                                        </h5>
                                        <p
                                            className="wd-dashboard-course-title card-text overflow-y-hidden"
                                            style={{ maxHeight: 100 }}
                                        >
                                            {movie.description}
                                        </p>

                                        {currentUser?.role === "FACULTY" && (
                                            <div style={{ float: "right", display: "flex" }}>
                                                <button
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        deleteCourse(movie._id);
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
                                                        setMovie(movie);
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