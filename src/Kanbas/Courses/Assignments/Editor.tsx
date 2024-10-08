
export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <p className="m-0">Assignment Name</p>
            <div className="input-box">
                <input id="wd-assignment-editor-title" className="input-primary form-control"
                    placeholder="A1" />

                <textarea id="wd-assignment-editor" className="input-secondary form-control"
                    defaultValue="The assignment is available online Submit a
                link to the landing page of your Web
                application running on Netlify. The landing
                page should include the following: Your full
                name and section Links to each of the lab
                assignments Link to the Kanbas application
                Links to all relevant source code repositories
                The Kanbas application should include a link
                to navigate back to the landing page." >
                </textarea>

                <div className="the-grid">
                    <p className="">Points</p>
                    <input id="wd-points" className="form-control" value={100} />
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
                                defaultValue="2024-05-13" />
                        </div>
                        <div className="p-0 mt-3" style={{ display: "flex" }}>
                            <div>
                                <p className="m-0"><label htmlFor="wd-available-from"><b>Available from</b></label></p>
                                <input type="date"
                                    className="form-control"
                                    id="wd-available-from"
                                    defaultValue="2024-05-06"
                                />
                            </div>
                            <div style={{ marginLeft: "5px" }}>
                                <p className="m-0"><label htmlFor="wd-available-until"><b>Until</b></label></p>
                                <input type="date"
                                    className="form-control"
                                    id="wd-available-until"
                                    defaultValue="2024-05-20" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <hr />
            <button className="form-control btn btn-lg btn-danger w-25"
                style={{ float: "right" }}
                id="wd-save">Save</button>
            <button className="form-control btn btn-lg  w-25"
                style={{
                    background: "#c7cdd1", marginRight: "5px",
                    float: "right"
                }}
                id="wd-cancel">Cancel</button>

        </div>
    );
}
