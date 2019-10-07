import React from 'react';
import './FileUploadBlob.scss';


const FileUploadBlob = (props) => {

    const previewFile = () => {

        const file = document.querySelector('#chooseFile').files[0];
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            if (props.getFile) {
                props.getFile(file);
            }
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }


    }

    return (
        <input
            id='chooseFile'
            className={`file-upload ${props.className && props.className}`}
            onChange={() => previewFile()}
            type="file"
            accept={props.acceptType ? props.acceptType : ``}
        />
    );

}

export default FileUploadBlob;