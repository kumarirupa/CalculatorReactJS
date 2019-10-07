import React, { Component } from 'react';
import images from '../../images';

class ChatSectionTop extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='chat-section-top'>
                <h1>#Lorem Ipsum</h1>
                <div className='channel-meta'>
                    <div className='channel-star'>
                        <img src={images.path.star} />
                    </div>
                    <div className='channel-member'>
                        <img src={images.path.setting} /> 10
                            </div>
                    <div className='channel-details'>
                        <h5>Lorem Lorem lorem lorem</h5>
                    </div>
                    <div className='channel-settings'>
                        <img src={images.path.setting} />
                    </div>
                </div>
                <div className='chat-search'>
                    <img src={images.path.search} />
                    <input type='text' placeholder='search' />
                </div>
            </div>
        )
    }
}

export default ChatSectionTop;