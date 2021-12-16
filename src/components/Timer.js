import React from "react";

class Timer extends React.Component {
  state = {
    seconds: 0,
  };
  timerId = -1;

  componentDidMount() {
    console.log("Timer componentDidMount");
    this.timerId = setInterval(() => {
      // console.log("second", this.state.seconds);
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000); // every 1second
  }

  componentWillUnmount() {
    console.log("Timer componentWillUnmount");
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <p>Time Spent in Page: {this.state.seconds}</p>
      </div>
    );
  }
}

export default Timer;
