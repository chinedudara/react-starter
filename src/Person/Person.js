import React from "react";
import Radium from "radium";

import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '700px'
        }
    };

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>My name is {props.name}. I'm {props.age}</p>
            <p>{props.children}</p>
            <input onChange={props.change} value={props.name} type="text"/>
        </div>
    )
}

export default Radium(person);