import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentHeadControlButtons from "./AssignmentHeadControlButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { GoChecklist } from "react-icons/go";
import React, { useState } from "react"
import { FaTrash } from "react-icons/fa";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteAssignment, updateAssignment } from "./reducer";



export default function Assignments() {
  const { cid } = useParams();
  const assignments = useSelector((state: any) => state.assignmentReducer).assignments

  const deleteAssignment = (AssignmentId: string) => {
    updateAssignment(assignments.filter((m: any) => m._id !== AssignmentId));
  };

  return (

    <div id="wd-assignments">

      <AssignmentsControls /> <br /> <br />


      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown className="me-2 fs-3" />
            <b>ASSIGNMENTS</b>
            <AssignmentHeadControlButtons />
          </div>

          {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <li className="wd-assignment-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="fs-3" />
                <GoChecklist className="fs-3" style={{ color: "green" }} />

                <div>
                  <a className="m-0 text-dark decoration-none">
                    <Link to={`/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" ><b>{assignment._id}</b></Link></a>
                  <div className="flex-auto">
                    <p className="m-0 text-danger pe-1">Multiple Modules</p>
                    <p className="m-0">| <b>Not available until</b> {assignment.available}</p>
                  </div>
                  <p className="m-0"> | <b>Due</b> {assignment.due} | {assignment.pts}pt</p>
                </div>
                <div className="ml-auto">
                  <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignment._id)} />

                  <LessonControlButtons />
                </div>
              </li>
            ))}


        </li>
      </ul>



    </div>
  );
}
