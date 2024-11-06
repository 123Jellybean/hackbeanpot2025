
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {

    const { aid } = useParams();

    const assignments = useSelector((state: any) => state.assignmentReducer).assignments

    const dispatch = useDispatch()

    const { cid } = useParams();
    return (


        <div id="wd-assignments-editor">

            <p className="m-0">Assignment Name</p>


            {assignments
                .filter((assignment: any) => assignment._id === aid)
                .map((assignment: any) => (<div className="input-box">
                    <input id="wd-assignment-editor-title" className="input-primary form-control"
                        value={assignment.title}
                        onChange={(e) => dispatch(updateAssignment(
                            { _id: aid, title: e.target.value }
                        ))} />

                    <textarea id="wd-assignment-editor" className="input-secondary form-control"
                        value={assignment.description}
                        onChange={(e) => dispatch(updateAssignment(
                            { _id: aid, description: e.target.value }
                        ))}
                    >
                    </textarea>

                    <div className="the-grid">
                        <p className="">Points</p>
                        <input id="wd-points" className="form-control" value={assignment.pts}
                            onChange={(e) => dispatch(updateAssignment(
                                { _id: aid, pts: e.target.value }
                            ))} />
                        <p className="">Assignemnt Group</p>
                        <div className="dropdown-editor">
                            <select id="wd-group" className="form-control">
                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            </select>
                        </div>
                        <p className="">Display Grade as</p>
                        <div className="dropdown-editor">
                            <select id="wd-group" className="form-control">
                                <option value="PERCENTAGE">Percentage</option>
                            </select>
                        </div>
                        <p>Submission Type</p>
                        <div className="form-control p-3">
                            <div className="dropdown-editor mb-3">
                                <select id="wd-submission-type" className="form-control">
                                    <option value="ONLINE">Online</option>
                                </select>
                            </div>
                            <div id="wd-entry-options">
                                <label htmlFor="wd-editor-checkboxes" className="pb-2"><b>Online Entry Option</b></label><br />

                                <input type="checkbox" name="Text Entry" id="wd-text-entry" />
                                <label htmlFor="wd-text-entry" className="pb-2" style={{ marginLeft: "5px" }}>Text Entry</label><br />

                                <input type="checkbox" name="Website URL" id="wd-website-url" />
                                <label htmlFor="wd-website-url" className="pb-2" style={{ marginLeft: "5px" }}>Website URL</label><br />

                                <input type="checkbox" name="Media Recordings" id="wd-media-recordings" />
                                <label htmlFor="wd-media-recordings" className="pb-2" style={{ marginLeft: "5px" }}>Media Recordings</label><br />

                                <input type="checkbox" name="Student Annotation" id="wd-student-annotation" />
                                <label htmlFor="wd-student-annotation" className="pb-2" style={{ marginLeft: "5px" }}>Student Annotation</label><br />

                                <input type="checkbox" name="File Uploads" id="wd-file-upload" />
                                <label htmlFor="wd-file-upload" style={{ marginLeft: "5px" }}>File Uploads</label><br />
                            </div>
                        </div>
                        <p>Assign</p>
                        <div className="form-control">
                            <div>
                                <p className="m-0"><label htmlFor="wd-assign-to"><b>Assign to</b></label></p>
                                <input className="form-control" id="wd-assign-to" defaultValue={"Everyone"} />
                            </div>
                            <div className="p-0 mt-3">
                                <p className="m-0"><label htmlFor="wd-due-date"><b>Due</b></label></p>
                                <input type="date"
                                    className="form-control"
                                    id="wd-due-date"
                                    defaultValue={assignment.duedate}
                                    onChange={(e) => dispatch(updateAssignment(
                                        { _id: aid, due: (e.target.value).toString() }
                                    ))} />
                            </div>
                            <div className="p-0 mt-3" style={{ display: "flex" }}>
                                <div>
                                    <p className="m-0"><label htmlFor="wd-available-from"><b>Available from</b></label></p>
                                    <input type="date"
                                        className="form-control"
                                        id="wd-available-from"
                                        defaultValue={assignment.outdate}
                                        onChange={(e) => dispatch(updateAssignment(
                                            { _id: aid, outdate: (e.target.value).toString }
                                        ))}
                                    />
                                </div>
                                <div style={{ marginLeft: "5px" }}>
                                    <p className="m-0"><label htmlFor="wd-available-until"><b>Until</b></label></p>
                                    <input type="date"
                                        className="form-control"
                                        id="wd-available-until"
                                        defaultValue={assignment.duedate}
                                        onChange={(e) => dispatch(updateAssignment(
                                            { _id: aid, duedate: (e.target.value).toString() }
                                        ))} />
                                </div>
                            </div>
                        </div>

                    </div>


                    <hr />
                    <Link to={`/Kanbas/Courses/${assignment.course}/Assignments`} className="text-decoration-none text-white" >
                        <button className="form-control btn btn-lg btn-danger w-25"
                            style={{ float: "right" }}
                            id="wd-save">

                            Save

                        </button>
                    </Link>
                    <Link to={`/Kanbas/Courses/${assignment.course}/Assignments`} className="text-decoration-none text-dark" >
                        <button className="form-control btn btn-lg  w-25"
                            style={{
                                background: "#c7cdd1", marginRight: "5px",
                                float: "right"
                            }}
                            id="wd-cancel">

                            Cancel

                        </button>
                    </Link>

                </div>))
            }





        </div >
    );
}
