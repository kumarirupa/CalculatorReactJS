import React, { Component } from 'react';
import ChatSectionTop from '../ChatSectionTop';
import ChatSectionMiddle from '../ChatSectionMiddle';
import ChatSectionBottom from '../ChatSectionBottom';

class ChatSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sampleArray: [1, 2, 3, 4, 5],
        }
    }
    render() {
        return (
            <div className='chat-section'>
                <div className='chat-section-left'>
                    <ChatSectionTop />
                    <ChatSectionMiddle />
                    <ChatSectionBottom />
                </div>
                <div className='chat-section-right'>

                </div>
            </div>
        )
    }
}

export default ChatSection;








