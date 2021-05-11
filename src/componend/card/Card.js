import React from "react";
import "./card.css";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bButtonClicked: false,
      bgColor: "red",
    };
  }
  handleButtonCLicked = (e) => {
    if (this.state.bgColor === "red") {
      this.setState({
        bgColor: "green",
      });
    } else {
      this.setState({
        bgColor: "red",
      });
    }
    this.setState({
      bButtonClicked: !this.state.bButtonClicked,
    });
  };
  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{ backgroundColor: this.state.bgColor }}
            className="cardDesign card"
          ></div>
          <button
            onClick={() => this.handleButtonCLicked("John")}
            style={{ marginBottom: "-7%" }}
            className="btn btn-primary"
          >
            Press
          </button>
          <div style={{ marginTop: "5%" }}>
            {this.state.bButtonClicked ? <p> Button clicked</p> : null}
          </div>
        </div>
        <div className="textPosition">
          <h3>Hello</h3>
          <h3>Hello Hello</h3>
          <h3>Hello Hello Hello</h3>
          <h3>Hello Hello Hello Hello</h3>
        </div>
      </div>
    );
  }
}
export default Card;
