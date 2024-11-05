import React, { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(7);
    console.log(count);
    return (
        <div id="wd-counter-use-state">
            <h2>Counter: {count}</h2>
            <button style={{ width: "70px", backgroundColor: "Green" }} className="form-control btn btn-lg btn-danger"
                onClick={() => setCount(count + 1)}
                id="wd-counter-up-click">
                Up
            </button>
            <button style={{ width: "100px", backgroundColor: "Red", marginLeft: "10px" }} className="form-control btn btn-lg btn-danger"
                onClick={() => setCount(count - 1)}
                id="wd-counter-down-click">
                Down
            </button>
            <hr /></div>);
}