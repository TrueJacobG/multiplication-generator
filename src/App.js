import "./App.css";
import { useState } from "react";

function App() {
  const [v1, setV1] = useState(parseInt(Math.random() * 1000) % 6);
  const [v2, setV2] = useState(parseInt(Math.random() * 1000) % 10);
  const [input, setInput] = useState("");

  const [result, setResult] = useState(false);
  const [message, setMessage] = useState("");

  function changeInput(n) {
    if (n === -1) {
      setInput((i) => i.substring(0, i.length - 1));
    } else {
      setInput((i) => i + n);
    }
  }

  function checkInput() {
    if (parseInt(input) === v1 * v2) {
      setMessage("Dobrze!");
    } else {
      setMessage(`Zle! Poprawna odpowiedz to ${v1 * v2}`);
    }
    setResult(true);

    setTimeout(() => {
      document.location.reload(true);
    }, 2000);
  }

  return (
    <div className="App">
      <h1>
        {v1} * {v2} =
      </h1>
      <div className="calc">
        <div className="row">
          <input type="button" value="1" onClick={() => changeInput(1)} />
          <input type="button" value="2" onClick={() => changeInput(2)} />
          <input type="button" value="3" onClick={() => changeInput(3)} />
        </div>
        <div className="row">
          <input type="button" value="4" onClick={() => changeInput(4)} />
          <input type="button" value="5" onClick={() => changeInput(5)} />
          <input type="button" value="6" onClick={() => changeInput(6)} />
        </div>
        <div className="row">
          <input type="button" value="7" onClick={() => changeInput(7)} />
          <input type="button" value="8" onClick={() => changeInput(8)} />
          <input type="button" value="9" onClick={() => changeInput(9)} />
        </div>
        <div className="row">
          <input type="button" value="0" onClick={() => changeInput(0)} />
          <input type="button" value="Del" onClick={() => changeInput(-1)} />
        </div>
      </div>
      <h1>{input}</h1>
      <input type="button" value="Check" onClick={() => checkInput()} />

      <h2>{result && message}</h2>
    </div>
  );
}

export default App;
