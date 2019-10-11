import React, { Component } from 'react';
import Switch from "react-switch";
import './privacy.scss';

import images from '../../../images';

class Privacy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            arrayCard: [{ name: "james" }, { name: "preeti" }, { name: "pari" }],
            searchString: '',
            dropdown: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.searchUser = this.searchUser.bind(this);
    }
    
    handleChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    searchUser() {
        console.log("search name")
        let libraries = this.state.arrayCard;
        const searchString = this.state.searchString.trim().toLowerCase();
        console.log("store string", searchString)
        if (searchString.length > 0) {
            libraries = libraries.filter(function (i) {
                return i.name.toLowerCase().match(searchString);
            });
        }
        this.setState({arrayCard:libraries})
        if (libraries.length > 0) {
            this.setState({
                dropdown:true,
                libraries: libraries
            })
        } else {
            this.setState({
                dropdown:false,
                libraries:null
            });
        }
    }

    render() {
        let {dropdown,libraries}=this.state
        return (
            <div className='privacy'>
                <div className='privacy-details'>
                    <div className="online-status">
                        <label>ONLINE STATUS</label>
                        <Switch onChange={(value) => this.setState({ checked: value })} checked={this.state.checked} />
                    </div>
                    <div class="search-blockUser">
                        <input className="search-field" type="text" value={this.state.searchString} onChange={this.handleChange} onKeyUp={this.searchUser} placeholder="Search.." name="searchString" />
                        {console.log("search Text")}
                        {dropdown ?
                        <ul className="searchList">
                            {
                                libraries.map((suggestion, index) => {
                                    console.log("suggetion",suggestion)
                                   return (
                                       <li key={index} className="listName" onClick={() => alert(suggestion.name)}>{suggestion.name}</li>
                                   )
                                })
                            }
                        </ul>
                        : ''}
                    </div>
                    <div className="blockUser-display">
                        {this.state.arrayCard.map((i) => {
                            return <div className="blockUser-info">
                                <div className="user-photo">
                                    <img className="blockUser-img" src={`${images.path.sampleProfile}`} alt='user' />
                                </div>
                                <div className="user-name"><label>Name:{i.name}</label></div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Privacy;
