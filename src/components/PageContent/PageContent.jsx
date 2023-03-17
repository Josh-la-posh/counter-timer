import { useEffect, useState } from "react";
import ManualPage from "./ManualPage";
import "./PageContent.css";

export default function PageContent() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [countDown, setCountDown] = useState(false);
  const [manualOption, setManualOption] = useState(false);

  function toggleModal() {
    setManualOption(!manualOption);
  }

  function handleStart() {
    setManualOption(false);
    setCountDown(true);
  }

  function timerFunction() {
    if (
      countDown &&
      ((sec && min && hour) ||
        (sec && min < 1 && hour) ||
        (sec && min && hour < 1) ||
        (sec && min < 1 && hour < 1))
    ) {
      setSec(sec - 1);
      setMin(min);
      setHour(hour);
    } else if (
      countDown &&
      ((sec < 1 && min && hour) || (sec < 1 && min && hour < 1))
    ) {
      setSec(59);
      setMin(min - 1);
      setHour(hour);
    } else if (countDown && sec < 1 && min < 1 && hour) {
      setSec(59);
      setMin(59);
      setHour(hour - 1);
    }
  }

  function autoTimer() {
    setCountDown(false);
    setSec(0);
    setMin(10);
    setHour(0);
  }

  useEffect(() => {
    console.log("time");
    const identifier = setTimeout(() => {
      timerFunction();
    }, 1000);
    return () => {
      clearTimeout(identifier);
    };
  }, [sec, countDown]);

  return (
    <div className="page">
      {manualOption && (
        <ManualPage
          sec={sec}
          setSec={setSec}
          min={min}
          setMin={setMin}
          hour={hour}
          setHour={setHour}
          setManualOption={setManualOption}
        />
      )}
      <div className="btn__container">
        <button className="btn manual" onClick={toggleModal}>
          Manual
        </button>
        <button type="reset" className="btn auto" onClick={autoTimer}>
          Auto
        </button>
      </div>
      <div className="timer__container">
        <div className="timer">
          {hour}:{min}:{sec}
        </div>
        <div className="timer__btn-container">
          <div className="timer__btn stop" onClick={() => setCountDown(false)}>
            Stop
          </div>
          <div className="timer__btn start" onClick={handleStart}>
            Start
          </div>
        </div>
      </div>
    </div>
  );
}
