import React from 'react';
function AlphabetBoard({ alphabet, alphabetCount, result }) {
    return (
        <div className="alphabetboard">
            {alphabetCount < 20 ? <h1>{alphabet}</h1> : <h1>{result}</h1>}
        </div>
    )
}
export default AlphabetBoard