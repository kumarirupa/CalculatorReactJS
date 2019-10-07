import React from 'react';
import images from "../../images";

import './avtar.css';

function Avtar(props) {
    return (
        <div className="Avtar-img">
            <img id="header-img" src={`${props.imgSrc}`} alt='' />
        </div>
    );
}

export default Avtar;
