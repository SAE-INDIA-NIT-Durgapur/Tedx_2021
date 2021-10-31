import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../CSS/Countdown.css";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;


function Countdown() {
  const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = 1635676200; // use UNIX timestamp in seconds

  const remainingTime = 0;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <>
      {
        (remainingTime) ?
          <div className="fluid-container App_countdown">

            <div className="counter">
              <CountdownCircleTimer
                {...timerProps}
                colors={[['#FFF5EE']]}
                duration={daysDuration}
                initialRemainingTime={remainingTime}
              >
                {({ elapsedTime }) =>
                  renderTime("days", getTimeDays(daysDuration - elapsedTime))
                }
              </CountdownCircleTimer>
            </div>
            <div className="counter">
              <CountdownCircleTimer
                {...timerProps}
                colors={[['#FFF5EE']]}

                duration={daySeconds}
                initialRemainingTime={remainingTime % daySeconds}
                onComplete={(totalElapsedTime) => [
                  remainingTime - totalElapsedTime > hourSeconds
                ]}
              >
                {({ elapsedTime }) =>
                  renderTime("hours", getTimeHours(daySeconds - elapsedTime))
                }
              </CountdownCircleTimer>
            </div>
            <div className="counter">
              <CountdownCircleTimer
                {...timerProps}
                colors={[['#FFF5EE']]}
                duration={hourSeconds}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={(totalElapsedTime) => [
                  remainingTime - totalElapsedTime > minuteSeconds
                ]}
              >
                {({ elapsedTime }) =>
                  renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
                }
              </CountdownCircleTimer>
            </div>
            <div className="counter">
              <CountdownCircleTimer
                {...timerProps}
                colors={[
                  ['#FFF5EE']
                ]}
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => [
                  remainingTime - totalElapsedTime > 0
                ]}
              >
                {({ elapsedTime }) =>
                  renderTime("seconds", getTimeSeconds(elapsedTime))
                }
              </CountdownCircleTimer>
            </div>
          </div> : <h1 className="text-center text-white fst-italic"><mark className="text-dark">TED<sup>x</sup>NITDurgapur is Live</mark></h1>
      }
    </>
  );
}

export default Countdown;
