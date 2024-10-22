import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
//import LessonControlButtons from "./LessonControlButtons";
//import GreenCheckmark from "./GreenCheckmark";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;
  return (
    <div>
      {/*<button>Collapse All</button>
        <button>View Progress</button>
        <select id="wd-select-publish">
            <option value="PUBALL">Publish All</option>
        </select>
        <button>+ Module</button>
         Implement Collapse All button, View Progress button, etc. */}


      <div>
        <ModulesControls /><br /><br /><br /><br />
        <ul id="wd-modules" className="list-group rounded-0">
          {modules
            .filter((module: any) => module.course === cid)
            .map((module: any) => (
              <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                  <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
                </div>
                {module.lessons && (
                  <ul className="wd-lessons list-group rounded-0">
                    {module.lessons.map((lesson: any) => (
                      <li className="wd-lesson list-group-item p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}


        </ul>
      </div>


    </div>
  );
}
