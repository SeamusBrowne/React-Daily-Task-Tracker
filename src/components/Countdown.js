import React, { useState, useEffect } from "react";

function Countdown() {
  const calculateTimeLeft = () => {
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    const difference = midnight - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

      return () => clearTimeout(timer);
  }, [timeLeft]);

    return (
      <div className="Countdown">
        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{`${timeLeft.hours || '00'}:${timeLeft.minutes || '00'}:${timeLeft.seconds || '00'}`}</strong>
          </span>
        </span>
  
      </div>
    );
}

export default Countdown;
