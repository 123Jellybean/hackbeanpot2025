import { useParams } from "react-router-dom";
export default function AddPathParameters() {
    const params = useParams();
    console.log("THINGY", params)
    const { a, b } = params;
    return (
        <div id="wd-add"> <h4>Add Path Parameters</h4>
            {a} + {b} = {parseInt(a as string) + parseInt(b as string)}
        </div>);
}