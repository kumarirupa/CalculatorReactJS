import React, { Component } from 'react';
import ProfileImage from '../../../components/ProfileImage';
import images from '../../../images';

class ChatSectionMiddle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sampleArray: [1, 2, 3, 4, 5],
        }
    }
    render() {
        return (
            <div className='chat-section-middle'>
                {this.state.sampleArray.map((ele, i) => {
                    return (
                        <div>
                            <div className='chats'>
                                <div className='chat-messages-actions'>
                                <div className='triangle-left'></div>
                                    <div className='chat-messages'>
                                        Hi...How are you?
                                    </div>
                                    <div className='chat-actions'>
                                        <img id='actions' src={images.path.smileFace2} />
                                        <img id='actions' src={images.path.reply} />
                                        <img id='actions' src={images.path.threeDots} />
                                    </div>
                                </div>
                                <div className='user-profile'>
                                    <div className='user-avtar'>
                                        <ProfileImage imgSrc={images.path.girlUser} />
                                    </div>
                                    <div className='user-name'>
                                        <h5>Girl User</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='chats'>
                                <div className='chat-messages-actions'>
                                    <div className='triangle-left'></div>
                                    <div className='chat-messages'>
                                        Lorem Ipsum Lorem Ipsum
                                    </div>
                                    <div className='chat-actions'>
                                        <img className='actions' src={images.path.smileFace2} />
                                        <img className='actions' src={images.path.reply} />
                                        <img className='actions' src={images.path.threeDots} />
                                    </div>
                                </div>
                                <div className='user-profile'>
                                    <div className='user-avtar'>
                                        <ProfileImage imgSrc={images.path.boyUser} />
                                    </div>
                                    <div className='user-name'>
                                        <h5>Boy User</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default ChatSectionMiddle;