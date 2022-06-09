import React from 'react';
function TimeDetails({ time, bestTime }) {
    return (
        <div className="time">
            <h3>Time: {time}s</h3>
            <p>my best time: {bestTime}s</p>
        </div>
    )
}
export default TimeDetails