import { useReducer} from "react";

const initialState = [];

const TODOS_ACTIONS = {
    ADD_TASK: 'add_task',
    DELETE_TASK: 'delete_task',
    RESET_TODOS: 'reset_todos'
}

function reducer(state, action){
    switch(action.type){
        case  TODOS_ACTIONS.ADD_TASK : return [
             ...state,
            {
                id: state.length + 1,
                name: action.payload
            }
        ];

         case TODOS_ACTIONS.DELETE_TASK : return(
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
            <h4> Todo List {todos.length} </h4>

            Add New Task:
            <input id="for_add_task" type="text" 
                onBlur = {(event) => 
                                dispatch({type: TODOS_ACTIONS.ADD_TASK, 
                                            payload: event.target.value}) 
                        }
            />

            <button onClick={() => dispatch({
                type: TODOS_ACTIONS.RESET_TODOS, 
                payload: initialState})}>
                    Очистить все
                </button>

            <hr/>

            {todos.map(todo => 
                        <li key = {todo.id}>
                            {todo.name}
                                <span>
                                    <button onClick={() => dispatch(
                                            {type: TODOS_ACTIONS.DELETE_TASK, payload:todo.id}
                                        )}>
                                        Delete
                                    </button>
                                </span>
                        </li>
                        )
            }
        </>
    );
}