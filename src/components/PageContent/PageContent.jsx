import { useEffect, useState } from "react";
import "./PageContent.css";

export default function PageContent() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [countDown, setCountDown] = useState(false)


  function timerFunction() {
    if (sec === 0 && min === 0 && hour > 0) {
      setSec(59);
      setMin(59);
      setHour(hour - 1);
    } else if ( sec === 0 && min > 0 && hour === 0) {
      setSec(59);
      setMin(min - 1);
      setHour(0);
    } else if (sec === 0 && min === 0 && hour === 0) {
      setSec(0);
      setMin(0);
      setHour(0);
    }
    if (sec === 1 && min > 0) {
      setSec(59);
      setMin(min - 1);
    }
    if (min === 1 && hour > 0) {
      setMin(59);
      setHour(hour - 1);
    }
  }

  function autoTimer() {
    setSec(0);
    setMin(10);
    setHour(0);
    setCountDown(false)
  }

  useEffect(() => {
    timerFunction();
    setTimeout(() => {
      if (countDown && sec) {
        setSec(sec - 1);
      }
    }, 1000);
  }, [sec, countDown]);

  return (
    <div className="page">
      <div className="btn__container">
        <button className="btn manual">Manual</button>
        <button className="btn auto" onClick={autoTimer}>Auto</button>
      </div>
      <div className="timer__container">
        <div className="timer">
          {hour}:{min}:{sec}
        </div>
        <div className="timer__btn-container">
          <div className="timer__btn stop" onClick={()=> setCountDown(false)}>Stop</div>
          <div className="timer__btn start" onClick={()=> setCountDown(true)}>Start</div>
        </div>
      </div>
    </div>
  );
}
