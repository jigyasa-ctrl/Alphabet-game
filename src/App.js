import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import AlphabetBoard from "./Components/AlphabetBoard"
import TimeDetails from "./Components/TimeDetails"
import TypeInput from "./Components/TypeInput"
import { useEffect, useState } from 'react';
function App() {
  const [alphabet, setAlphabet] = useState()
  const [time, setTime] = useState(0)
  const [bestTime, setBesttime] = useState(localStorage.getItem("bestTime") ? localStorage.getItem("bestTime") : 0)
  const [alphabetCount, setAlphabetCount] = useState(0)
  const [result, setResult] = useState()
  const [interval, setInterval] = useState();

  useEffect(() => {
    clearInterval(interval)
    if (alphabetCount < 20) {
      var intervals = setTimeout(() => {
        setTime(time + 1)
      }, 1000);
      setInterval(intervals)
    }

  }, [time])

  useEffect(() => {
    if (alphabetCount == 20) {
      if (time < parseInt(bestTime) || parseInt(bestTime) == 0) {
        setResult("success")
        setBesttime(time)
        localStorage.setItem("bestTime", time)
      } else {
        setResult("failure")
      }
    } else {
      const alphabet = "abcdefghijklmnopqrstuvwxyz"
      const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
      setAlphabet(randomCharacter);
    }
  }, [alphabetCount])
  return (
    <div className="App">
      <Header />
      <AlphabetBoard alphabet={alphabet} alphabetCount={alphabetCount} result={result} />
      <TimeDetails time={time} bestTime={bestTime} />
      <TypeInput alphabet={alphabet} setAlphabetCount={setAlphabetCount} alphabetCount={alphabetCount} setTime={setTime} time={time} />
    </div>
  );
}

export default App;
