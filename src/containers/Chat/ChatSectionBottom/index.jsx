import React, { Component } from 'react';
import images from '../../../images';

class ChatSectionBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='chat-section-bottom'>
                <div className='chat-type-message'>
                    <img id='smile-face' src={images.path.smileFace} />
                    <input type='text' placeholder='Type your message here' />
                    <img id='attach-pin' src={images.path.attachPin} />
                    <img id='image-upload' src={images.path.imageUpload} />
                </div>
            </div>
        )
    }
}

export default ChatSectionBottom;