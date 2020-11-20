import React from "react"

function InputBox(props) {
    return (
        <div>
            <label> {props.prompt} </label>
            <br></br>
            <input style={{height: props.height, width: props.width}}/>
        </div>
    );
}

export default InputBox;