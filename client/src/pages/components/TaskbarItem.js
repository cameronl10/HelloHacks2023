import React from "react"
import "./TaskbarItem.css"

function TaskbarItem(props) {
    return (
        <div class="item-container">
            <a href={props.link}>
                <div className="img-box">{props.img}</div>
                <div className="bar-title">
                <h2>
                    {props.name}
                </h2>
                </div>
            </a>
        </div>
    );
}

export default TaskbarItem;