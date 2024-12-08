import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";
import { FaRegCircleUser } from "react-icons/fa6";

export default function Dashboard({
  movies,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  movies: any[];
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

  function rgba(r: number, g: number, b: number, a: number): string {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  return (
    <div
      id="wd-dashboard"
      style={{
        backgroundImage: "url(/images/dragon.jpg)",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div className="d-flex align-items-center justify-content-between">
        {/* Dashboard Title */}
        <h1
          id="wd-dashboard-title"
          className="mb-0 p-3"
          style={{ fontFamily: "Courier New", fontWeight: "bold" }}
        >
          Dashboard
        </h1>

      </div>
      <br />

      <h2
        id="wd-dashboard-published"
        style={{ fontFamily: "Courier New", fontWeight: "bold" }}
        className="ps-3"
      >
        Movies
      </h2>
      {/* Slideshow */}
      <Carousel>
        {movies.map((movie) => (
          <Carousel.Item key={movie.id}>
            <img
              className="d-block w-100"
              src={movie.movie_banner}
              alt={movie.title}
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            ></div>
            <Carousel.Caption>
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <hr />

      {/* Movie Rankings Section */}
      <div id="movie-rankings" className="mt-5 ps-3">
        <h2 style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
          Rankings
        </h2>
        <table className="table table-striped">
          <thead style={{ background: rgba(0, 0, 0, 0.5), color: "white" }}>
            <tr>
              <th
                style={{
                  backgroundColor: "transparent",
                  fontSize: 18,
                  color: "white",
                }}
              >
                Rank
              </th>
              <th
                style={{
                  backgroundColor: "transparent",
                  fontSize: 18,
                  color: "white",
                }}
              >
                Movie Title
              </th>
              <th
                style={{
                  backgroundColor: "transparent",
                  fontSize: 18,
                  color: "white",
                }}
              >
                Rating
              </th>
            </tr>
          </thead>
          <tbody>
            {movies
              .sort((a, b) => Number(b.rt_score) - Number(a.rt_score)) // Sort by rating (highest to lowest)
              .map((movie, index) => (
                <tr
                  key={movie.id}
                  style={{
                    background: rgba(0, 0, 0, 0.5),
                    color: "white",
                  }}
                >
                  <td style={{ background: "transparent", color: "white" }}>
                    {index + 1}
                  </td>
                  <td style={{ background: "transparent", color: "white" }}>
                    {movie.title}
                  </td>
                  <td style={{ background: "transparent", color: "white" }}>
                    {movie.rt_score ?? "N/A"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
