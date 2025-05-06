import { useRef, useEffect, useState } from "react";

export default function Task4Main(){
    const [inputValue, setInputValue] = useState('');
    const inputEl = useRef(null);
    const prevRef = useRef();
    
    useEffect(() => { prevRef.current = inputValue; }, [inputValue]);

    const onButtonClick = function(){ inputEl.current.focus();};

    return(
        <>
            <h1>Задача 4</h1> 

            <input 
                ref={inputEl} 
                type="text" 
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)} 
            />
            <button onClick={onButtonClick}>Устоновить фокус на поле ввода</button>
                
                <h2>Current Value: {inputValue}</h2>
                <h2>Previous Value vs Ref: {prevRef.current}</h2>
        </>
    );
}