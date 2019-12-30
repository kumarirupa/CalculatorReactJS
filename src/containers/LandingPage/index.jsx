import React, { Component } from "react";
import "./LandingPage.scss";
import axios from "axios";
import images from "../../images";
import Swal from "sweetalert2";
import _ from "lodash";
import PrimaryBtn from "../../components/TButton";

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "",
      darkTheme: false,
    }
  }

  onClick = button => {

    if (button === "=") {
      this.calculate()
    }

    else if (button === "C") {
      this.reset()
    }
    else if (button === "CE") {
      this.backspace()
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };


  calculate = () => {
    var checkResult = ''
    if (this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    }

    else {
      checkResult = this.state.result
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  changeTheme = () => {
    if(this.state.darkTheme){
      document.getElementsByClassName('js-focus-visible')[0].style.background = '#fff';
      this.setState({ darkTheme: false });
    }else{
      document.getElementsByClassName('js-focus-visible')[0].style.background = '#000';
      this.setState({darkTheme:true});
    }
  }

  render() {
    console.log('this.state::::::', this.state)
    return (
      <div className="wrapper">
        <div className="headingBox">
          <h1 className={this.state.darkTheme?'heading':''}>Calculator</h1>
          <button style={{float:'right'}} onClick={()=>this.changeTheme()}>{this.state.darkTheme? 'White Theme' : ' Dark Theme'}</button>
        </div>
        <div className="main-box">
          <p className={this.state.darkTheme?'value-box-dark':'value-box'}>{this.state.result}</p>
          <div className="calc-area">
            <PrimaryBtn onClick={this.onClick} theme={this.state.darkTheme}></PrimaryBtn>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
