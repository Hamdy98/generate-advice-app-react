import React from "react";
import axios from "axios";
import "./App.css";


export default class App extends React.Component {
  state = {
    advice: ""
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get("https://api.adviceslip.com/advice")
      .then((response) => {
        const {advice} = response.data.slip;
        this.setState({advice});
      })
      .catch((error) => {
        alert("Please Check Your Network ):")
      });
  }

  playAdviceSound = () => {
    const {advice} = this.state;
    // the SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${advice}`);
    // speak method of speechSynthesis speaks the utterance
    speechSynthesis.speak(utterance);
  }

  render() {
    const {advice} = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <div className="parentOfButtons">
            <button className="button" onClick={this.fetchAdvice}>
              <span>GIVE ME ADVICE!</span>
            </button>
            <button className="button" onClick={this.playAdviceSound}>
              <span><i className="fas fa-volume-up"></i></span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}