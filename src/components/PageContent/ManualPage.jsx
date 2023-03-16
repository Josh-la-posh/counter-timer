import './PageContent.css';

export default function ManualPage({sec, setSec, min, setMin, hour, setHour, setManualOption}) {
    function handleSubmit() {
        hour === '' ? setHour(0) : setHour(hour);
        min === '' ? setMin(0) : setMin(min);
        sec === '' ? setSec(0) : setSec(sec);
        // setManualOption(false);
    }
  return (
    <div className="manual__values">
      <div className="manual__values-container">
        <input type="number" pattern='[0-9]*' placeholder="Hour" min={0} value={hour} onChange={(e)=>setHour(e.target.value)} />
        <input type="number" placeholder="Minute" min={0} value={min} onChange={(e)=>setMin(e.target.value)}/>
        <input type="number" placeholder="Second" min={0} value={sec} onChange={(e)=>setSec(e.target.value)} />
        <button className="manual__btn" onClick={handleSubmit}>Set</button>
      </div>
    </div>
  );
}
