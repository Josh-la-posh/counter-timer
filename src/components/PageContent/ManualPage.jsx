import './PageContent.css';

export default function ManualPage({sec, setSec, min, setMin, hour, setHour}) {
    function handleSubmit() {
        hour === '' ? setHour(0) : setHour(hour);
        min === '' ? setMin(0) : setMin(min);
        min > 59 ? setMin(59) : setMin(min);
        setSec(0);
    }
  return (
    <div className="manual__values">
      <div className="manual__values-container">
        <input type="number" pattern='[0-9]*' placeholder="Hour" min={0} value={hour} onChange={(e)=>setHour(e === NaN ? 0 : e.target.value)} />
        <input type="number" placeholder="Minute" min={0} max='59' value={min} onChange={(e)=>setMin(e.target.value)}/>
        {/* <input type="number" placeholder="Second" min={0} value={sec} onChange={(e)=>setSec(e.target.value)} /> */}
        <button className="manual__btn" onClick={handleSubmit}>Set</button>
      </div>
    </div>
  );
}
