import React, { useState } from "react";
export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };
    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <button style={{ marginBottom: "15px", fontSize: "15px", height: "40px", width: "120px", backgroundColor: "Green", marginLeft: "10px" }} className="form-control btn btn-lg btn-danger"

                onClick={addElement}>Add Element</button>


            <ul style={{ paddingLeft: "5px" }}>
                {array.map((item, index) => (
                    <li style={{ width: "250px", display: "flex", justifyContent: "space-between", alignItems: "center" }} className="form-control" key={index}>
                        {item}
                        <button style={{ float: "right", fontSize: "15px", width: "100px", height: "40px" }} className="form-control btn btn-lg btn-danger" onClick={() => deleteElement(index)}
                            id="wd-delete-element-click">
                            Delete</button>
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    );
}
