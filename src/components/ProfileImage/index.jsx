import React from 'react';
import './ProfileImage.scss';

function ProfileImage(props) {
    return (
        <div
            className={`profile-img ${props.className ? props.className : ``}`}
            id={props.id && props.id}
            style={{ width: props.size && props.size, height: props.size && props.size }}
            onClick={() => { props.onClick && props.onClick() }}
        >
            <img
                id={props.imgId && props.imgId}
                className={props.imgClassName && props.imgClassName}
                src={props.imgSrc && props.imgSrc} alt={props.alt || ''}
                style={{ height: props.size && props.size, width: props.size && props.size }}
            />
            <div className={`status-indicator ${props.status ? props.status : ''  }  `} ></div>
        </div>
    );
}

export default ProfileImage;
