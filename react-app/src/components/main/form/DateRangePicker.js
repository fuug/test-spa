import React, {useState} from 'react';
import './dateRangePicker.css';

const DateRangePicker = (props) => {
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const sendDate = () => {
        props.getByDate(start, end)
    }
    const clearDateAndPicker = () => {
        setStart('')
        setEnd('')
        props.clearDate()
    }
    return (
        <div className="date-picker">

            <div className="input-group">
                <input type="date" value={start} onChange={e => setStart(e.target.value)}/>
                <input type="date" value={end} onChange={e => setEnd(e.target.value)}/>

                <button onClick={sendDate}>Применить</button>
                <button className="danger" onClick={clearDateAndPicker}>Сбросить</button>
            </div>
        </div>
    );
};

export default DateRangePicker;