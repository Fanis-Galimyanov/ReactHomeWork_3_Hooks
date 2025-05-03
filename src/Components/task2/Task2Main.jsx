import { useReducer } from "react";

const initialState = {count: 5};

function reducer(state, action){
    switch(action.type){
        case 'increment':
            return {
               // ...state,
                count: state.count + 1
            };
        case 'decrement':
            return {
              //  ...state,
                count: state.count - 1,
            };
        default:
            throw new Error();
    }
}

export default function Task2Main(){

const [state, dispatch] = useReducer(reducer, initialState);

return(
    <>
        <h2>Задача 2</h2>

        Count: {state.count}

        <button onClick = {() => dispatch({type: 'decrement'})}>-</button>

        <button onClick = {() => dispatch({type: 'increment'})}>+</button>
    </>    
    );
}