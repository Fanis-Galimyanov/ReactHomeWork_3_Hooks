import { useReducer} from "react";

const initialState = [];

const TODOS_ACTIONS = {
    ADD_TODO: 'add_task',
    TOGGLE_TODO: 'toggle_todo',
    DELETE_TODO: 'delete_task',
    RESET_TODOS: 'reset_todos',
    
}

function reducer(state, action){
    switch(action.type){
        case  TODOS_ACTIONS.ADD_TODO : return [
             ...state,
            {
                id: Date.now(),
                name: action.payload,
                complete: false
            }
        ];

        case TODOS_ACTIONS.TOGGLE_TODO: return ( state.map(task => {  
                                                    if(task.id === action.payload){
                                                            return {...task, complete: !task.complete}
                                                            }
                                                    return task;
                                                }));

         case TODOS_ACTIONS.DELETE_TODO : return(
                    state.filter(d => d.id !== action.payload));

         case TODOS_ACTIONS.RESET_TODOS: return init(action.payload)

        default: return state;

    }
}

function init(initialState){
    return initialState;
}


export default function Task5Main(){

    const [todos, dispatch] = useReducer(reducer, initialState, init);

    return(
        <>
            <h1>Задача 5</h1>
            <h4> Todo List длина: {todos.length} </h4>

            <span>Новая задача:</span>
            <input id="for_add_task" type="text" />

            <button onClick={() => 
                                dispatch({type: TODOS_ACTIONS.ADD_TODO, 
                                            payload: document.getElementById('for_add_task').value}) 
                        }>
                    Добавить задачу
            </button>

            <hr/>

            <button onClick={() => dispatch({
                type: TODOS_ACTIONS.RESET_TODOS, 
                payload: initialState})}>
                    Очистить все
                </button>

            <hr/>

            {todos.map(todo => 
                        <li key = {todo.id}>
                           <span> {todo.name} </span>
                                <span>
                                    <button onClick={() => dispatch(
                                            {type: TODOS_ACTIONS.TOGGLE_TODO, payload:todo.id}
                                        )}>
                                       {todo.complete?'Восстановить':'Завершённая'}
                                    </button>
                                </span>

                                <span> 
                                    <button onClick={() => dispatch(
                                            {type: TODOS_ACTIONS.DELETE_TODO, payload:todo.id}
                                        )}>
                                        Уадлить
                                    </button>
                                </span>
                        </li>
                    )
            }
        </>
    );
} 