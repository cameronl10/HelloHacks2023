import React from "react"
import "./TaskbarItem.css"

function TaskbarItem(props) {
    return (
        <div class="item-container">
            <a href={props.link}>
            <img src={props.img} alt="graphic"/>
            <h2>
                {props.name}
            </h2>
            </a>
        </div>
    );
}

export default TaskbarItem;