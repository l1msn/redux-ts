import TODO_ACTIONS_TYPES from "../../const/todoActionTypes";

interface IFetchTodoAction {
    type: TODO_ACTIONS_TYPES.FETCH_TODOS,
}

interface IFetchTodoSuccessAction {
    type: TODO_ACTIONS_TYPES.FETCH_TODOS_SUCCESS,
    payload: any[]
}

interface IFetchTodoErrorAction {
    type: TODO_ACTIONS_TYPES.FETCH_TODOS_ERROR,
    payload: string
}

interface ISetTodoPageAction {
    type: TODO_ACTIONS_TYPES.SET_TODO_PAGE,
    payload: number
}

type ITodoAction = IFetchTodoAction | IFetchTodoSuccessAction
    | IFetchTodoErrorAction | ISetTodoPageAction;

export default ITodoAction;
