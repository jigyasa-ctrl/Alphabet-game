import React from 'react';
function TypeInput({ alphabet, setAlphabetCount, alphabetCount, setTime, time }) {
    function onChange(e) {

        if (e.target.value == alphabet) {
            setAlphabetCount(alphabetCount + 1);

        } else {
            if (e.target.value !== "") {
                setTime(time + 0.5)
            }
        }
    }
    function OnClickReset() {
        setAlphabetCount(0);
        setTime(0)

    }
    return (
        <div className="inputsection">
            <input placeholder="Type Here ..." onChange={onChange}></input>
            <button onClick={OnClickReset}>Reset</button>
        </div>
    )
}
export default TypeInput