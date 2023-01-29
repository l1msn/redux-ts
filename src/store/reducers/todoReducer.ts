import ITodoState from "../../interfaces/todo/ITodoState";
import TODO_ACTIONS_TYPES from "../../const/todoActionTypes";
import ITodoAction from "../../interfaces/todo/ITodoAction";

const initialState: ITodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10
}


function todoReducer(state: ITodoState = initialState, action: ITodoAction): ITodoState {
    switch (action.type) {
        case TODO_ACTIONS_TYPES.FETCH_TODOS:
            return {
                ...state, loading: true
            }
        case TODO_ACTIONS_TYPES.FETCH_TODOS_SUCCESS:
            return {
                ...state, loading: false, todos: action.payload
            }
        case TODO_ACTIONS_TYPES.FETCH_TODOS_ERROR:
            return {
                ...state, loading: false, error: action.payload
            }
        case TODO_ACTIONS_TYPES.SET_TODO_PAGE:
            return {
                ...state, page: action.payload
            }
        default:
            return state;
    }
}

export default todoReducer;
