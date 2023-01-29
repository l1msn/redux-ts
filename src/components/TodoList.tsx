import React, {useEffect} from 'react';
import useTypesSelector from "../hooks/useTypesSelector";
import {useDispatch} from "react-redux";
import {fetchTodos} from "../store/actions-creators/todo"

const TodoList: React.FC = () => {
    const {todos, error, loading, page, limit} = useTypesSelector((state) => {
        return state.todo;
    });
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch<any>(fetchTodos);
    },[]);

    if(loading) {
        return <h1>Loading...</h1>
    }
    if(error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {todos.map((todo: any) => {
                return <div key={todo.id}>{todo.title}</div>
            })}
        </div>
    );
};

export default TodoList;
