import { useReducer, useState, useCallback } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

const initialState = {count: 0};

function reducer(state, action){
    switch(action.type){
        case 'increment':
            return {
                count: state.count + 1
            };
        case 'decrement':
            return {
                count: state.count - 1,
            };
        default:
            throw new Error();
    }
}

export default function Task2Main(){

const [state, dispatch] = useReducer(reducer, initialState);
const [messageMemo, setMessageMemo] = useState('Слово');
const [messageOrdinary, setMessageOrdinary] = useState('Слово');

const hellofuncMemo = useCallback(() => {
      setMessageMemo('Привет, я из useCallback');
    }, [messageMemo]);

    function hellofuncOrdinary() {
      setMessageOrdinary('Привет, я из обычной функции');
    }
    console.log('Parent render');

return(
    <>
        <h1>Задача 2</h1>

        <p>Count: {state.count}</p>
        <p><button onClick = {() => dispatch({type: 'decrement'})}>-</button></p>
        <p><button onClick = {() => dispatch({type: 'increment'})}>+</button></p>

        <ChildOne hellofuncMemo = {hellofuncMemo} messageMemo = {messageMemo} />
        <ChildTwo hellofuncOrdinary = {hellofuncOrdinary} messageOrdinary = {messageOrdinary} />
    </>    
    );
}