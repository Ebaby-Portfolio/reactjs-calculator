import React, { useState } from 'react'
import '../stylesheets/calculator.css'

export default function Calculator({ theme }) {
    const [result, setResult] = useState('');

    const handleClick = (e) => {
        if (result === "Error") return;
        if (e.target.name === "0" && result === "0") return;
        if (e.target.name === "." && result.includes(".")) return;

        setResult(result.concat(e.target.name));
    }

    const clear = () => {
        setResult('');
    }

    const backspace = () => {
        if (result === "Error") return;
        setResult(result.slice(0, result.length - 1)); // or result.slice(0, - 1)
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (err) {
            setResult("Error");
        }
    }

    const onInputChanged = (e) => { }

    return (
        <div className="container">
            <form>
                <input type="text" value={result} onChange={onInputChanged} />
            </form>
            <div className="keypad">
                <button className={theme} onClick={clear} id="clear">Clear</button>
                <button className={theme} onClick={backspace} id="backspace">C</button>
                <button className={theme} name="/" onClick={handleClick}>&divide;</button>
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                <button className={theme} name="*" onClick={handleClick}>&times;</button>
                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                <button className={theme} name="-" onClick={handleClick}>&ndash;</button>
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                <button className={theme} name="+" onClick={handleClick}>+</button>
                <button name="0" onClick={handleClick}>0</button>
                <button name="." onClick={handleClick}>.</button>
                <button className={theme} onClick={calculate} id="result">=</button>
            </div>
        </div>
    )
}
