import React from 'react';
import './TButton.scss';

const TButton = (props) => {
    return <div className="button">

        <button className={props.theme ? 'single-btn-dark' :'single-btn'} name="1" onClick={e => props.onClick(e.target.name)}>1</button>
        <button className={props.theme ? 'single-btn-dark' :'single-btn'} name="2" onClick={e => props.onClick(e.target.name)}>2</button>
        <button className={props.theme ? 'single-btn-dark' :'single-btn'} name="3" onClick={e => props.onClick(e.target.name)}>3</button>
        <button className={props.theme ? 'single-btn-dark' :'single-btn'} name="+" onClick={e => props.onClick(e.target.name)}>+</button>


        <button className={props.theme ? 'single-btn-dark' :'single-btn'} name="4" onClick={e => props.onClick(e.target.name)}>4</button>
        <button className={props.theme ? 'single-btn-dark' :'single-btn'} name="5" onClick={e => props.onClick(e.target.name)}>5</button>
        <button className={props.theme ? 'single-btn-dark' :'single-btn'} name="6" onClick={e => props.onClick(e.target.name)}>6</button>
        <button className={props.theme ? 'single-btn-dark' :'single-btn'} name="-" onClick={e => props.onClick(e.target.name)}>-</button>

        <button className={props.theme ? 'single-btn-dark' :'single-btn'} name="7" onClick={e => props.onClick(e.target.name)}>7</button>
        <button className={props.theme ? 'single-btn-dark' :'single-btn'} name="8" onClick={e => props.onClick(e.target.name)}>8</button>
        <button className={props.theme ? 'single-btn-dark' :'single-btn'} name="9" onClick={e => props.onClick(e.target.name)}>9</button>
        <button className={props.theme ? 'single-btn-dark' :'single-btn'} name="*" onClick={e => props.onClick(e.target.name)}>x</button>

        <button className={props.theme ? 'single-btn-dark' :'single-btn'}  name="C" onClick={e => props.onClick(e.target.name)}>C</button>

        <button className={props.theme ? 'single-btn-dark' :'single-btn'} name="0" onClick={e => props.onClick(e.target.name)}>0</button>
        <button className={props.theme ? 'single-btn-dark' :'single-btn'} name="=" onClick={e => props.onClick(e.target.name)}>=</button>
        <button className={props.theme ? 'single-btn-dark' :'single-btn'} name="/" onClick={e => props.onClick(e.target.name)}>÷</button>
    </div>

}
export default TButton;
