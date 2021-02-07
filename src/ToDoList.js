import React from "react";

const ToDoList = (props) => {
    
    return (
            <div className="list-container">
                  <li>{props.text}</li>
                <span onClick={() => {
                    props.onSelect(props.id)
                }}>+</span>
            </div>
    )
};

export default ToDoList;