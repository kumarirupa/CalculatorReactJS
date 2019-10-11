import React, { Component } from 'react';
import Switch from "react-switch";
import './privacy.scss';



//Constants
import images from '../../../images';


class Privacy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            arrayCard: [{ name: "james" }, { name: "preeti" }, { name: "pari" }],
            searchString: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.searchUser = this.searchUser.bind(this);
    }

    handleChange = evt => {
        console.log("check event", evt)
        // Handling value changes on Input and updating state likewise
        this.setState({ [evt.target.name]: evt.target.value });
    }
    searchUser() {
        console.log("search name")
       let libraries = this.state.arrayCard,
         searchString = this.state. searchString.trim().toLowerCase();
         console.log("store string",searchString)
        if (searchString.length > 0) {
            libraries = libraries.filter(function (i) {
                return i.name.toLowerCase().match(searchString);
            });
        }
        this.setState({arrayCard:libraries})
    }

    listOfSuggestion = () =>{
   
        return(
            this.state.arrayCard.map( ele =>{
        <li>ele</li>
            })
        )
    }


        render(){
            this.state.dropDown?this.listOfSuggestion():null
            return (
                <div className='privacy-details'>
                    <div className="online-status">
                        <label>ONLINE STATUS</label>
                        <Switch onChange={(value) => this.setState({ checked: value })} checked={this.state.checked} />
                    </div>
                    <div class="search-blockUser">
                        <input type="text" value={this.state.searchString} onChange={this.handleChange} onKeyUp={this.searchUser} placeholder="Search.." name="searchString" />
                        {console.log("search Text")}
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
            )
        }
    }

    export default Privacy;
