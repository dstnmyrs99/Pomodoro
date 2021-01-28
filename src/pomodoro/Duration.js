import React from "react";
import { minutesToDuration } from "../utils/duration";

function Duration({ type, time, setTime, high, low, inSession, increment }) {
  //line 6 is only for qualified testing purposes
  const focus = type.toLowerCase();
  const handleClick = (change) => {
    if (!inSession) setTime(type, change);
  };

  return (
    <>
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid={`duration-${focus}`}>
          {/* TODO: Update this text to display the current focus session duration */}
          {type} Duration: {minutesToDuration(time)}
        </span>
        <div className="input-group-append">
          {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid={`decrease-${focus}`}
            onClick={() => {
              if (time > low) handleClick(-increment);
            }}
          >
            <span className="oi oi-minus" />
          </button>
          {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid={`increase-${focus}`}
            onClick={() => {
              if (time < high) handleClick(increment);
            }}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Duration;
