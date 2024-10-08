import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
      <div className="row row-cols-1 row-cols-md-5 g-4"> 

        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/cybertruck.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1234 React JS
                </h5>      
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software dev
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/picopark.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CO101 Co Operation
                </h5>      
                <p className="wd-dashboard-course-title card-text">
                  Team Building
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/switch.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  GM313 Gaming
                </h5>      
                <p className="wd-dashboard-course-title card-text">
                  Introduction to gaming
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/pumpkincarving.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  HW237 Carving
                </h5>      
                <p className="wd-dashboard-course-title card-text">
                  The art of carving pumpkins
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>


        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/rubberducky.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  DK715 Rubber Duck
                </h5>      
                <p className="wd-dashboard-course-title card-text">
                  Exploring rubber ducks!!!
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/electricalengineering.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  EECE2520 Systems
                </h5>      
                <p className="wd-dashboard-course-title card-text">
                  Exploring Linear Systems
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>


        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/graphicdesigner.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  ARTG1001 Design
                </h5>      
                <p className="wd-dashboard-course-title card-text">
                  Introduction to design
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>


        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/switch.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS3300 PL
                </h5>      
                <p className="wd-dashboard-course-title card-text">
                  Programming languages
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
