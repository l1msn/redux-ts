import {Dispatch} from "redux";
import axios from "axios";
import TODO_ACTIONS_TYPES from "../../const/todoActionTypes";
import ITodoAction from "../../interfaces/todo/ITodoAction";

async function fetchTodos(dispatch: Dispatch<ITodoAction>, page = 1, limit = 10) {
    try {
        dispatch({
            type: TODO_ACTIONS_TYPES.FETCH_TODOS
        })
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
            params: {
               _page: page,
               _limit: limit
            }
        });
        setTimeout((): void => {
            dispatch({
                type: TODO_ACTIONS_TYPES.FETCH_TODOS_SUCCESS,
                payload: response.data
            })
        },500);
    } catch (e) {
        dispatch({
            type: TODO_ACTIONS_TYPES.FETCH_TODOS_ERROR,
            payload: "Error fetch!"
        })
    }
}

function setTodoPage(page: number): ITodoAction {
    return {
        type: TODO_ACTIONS_TYPES.SET_TODO_PAGE,
        payload: page
    }
}

export  { fetchTodos, setTodoPage };
