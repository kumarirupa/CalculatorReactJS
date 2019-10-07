import React from 'react';
import './TButton.scss';

const TButton = (props) => {
    return <button
        id={`${props.id ? props.id : ''}`}
        onClick={() => props.onClick()}
        type={props.type ? props.type : 'button'}
        className={`tsg-btn ${props.className ? props.className : ''}`}
        onClick={() => props.onClick()}
        disabled={props.disabled ? props.disabled : false}
        data-toggle={props.dataToggle ? props.dataToggle : ''}
        data-target={props.dataTarget ? props.dataTarget : ''}
        style={props.style ? props.style : {}}
    >
        {props.icon && <img src={props.icon}></img>}<span>{props.text && props.text}</span>
    </button>
}
export default TButton;
