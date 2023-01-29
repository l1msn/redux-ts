interface ITodoState {
    todos: any[],
    loading: boolean,
    error: null | string,
    page: number;
    limit: number;
}

export default ITodoState;
