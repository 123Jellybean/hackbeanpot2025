import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment } from "./reducer";
import React, { useState, useEffect } from "react"

import * as assignmentsClient from "../client";


export default function AssignmentsControls() {
  useParams()
  const { cid } = useParams();
  const dispatch = useDispatch();
  const [assignmentName] = useState("");
  const createAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = { title: assignmentName, course: cid };
    const assignments = await assignmentsClient.createAssignmentForCourse(cid, newAssignment);
    dispatch(addAssignment(assignments));
  };

  const navigate = useNavigate();

  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <button onClick={createAssignmentForCourse} id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>

      <button id="wd-add-group" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group</button>


      <div className="search-box">
        <CiSearch className="position-inbox" style={{ bottom: "1px" }} />
        <input id="wd-search-assignment" className="srch-primary"
          placeholder="Search..." />
      </div>


      {/* Implement the View Progress and Collapse All buttons with IDs wd-view-progress and wd-collapse-all */}
    </div>
  );
}


