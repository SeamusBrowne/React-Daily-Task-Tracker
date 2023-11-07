import React, { Component } from "react";
import PropTypes from "prop-types";

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };
  }

  render() {
    const countDown = this.state;

    return (
      <div className="Countdown">
        {/* <span className="Countdown-col"> */}
          {/* <span className="Countdown-col-element"> */}
            {/* <strong>{this.addLeadingZeros(countDown.days)}</strong> */}
            {/* <span>{countDown.days === 1 ? "Day" : "Days"}</span> */}
          {/* </span> */}
        {/* </span> */}

        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.hours)}</strong>
          </span>
            <span>:</span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.min)}</strong>
            <span>:</span>
          </span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.sec)}</strong>
            <span>.s</span>
          </span>
        </span>
      </div>
    );
  }
}

Countdown.propTypes = {
  date: PropTypes.string.isRequired,
};

Countdown.defaultProps = {
  date: new Date(),
};

export default Countdown;
