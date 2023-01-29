import React, {useEffect} from 'react';
import useTypesSelector from "../hooks/useTypesSelector";
import {useDispatch} from "react-redux";
import fetchUsers from "../store/actions-creators/user";


const UserList: React.FC = () => {
    const {users, error, loading} = useTypesSelector((state) => {
        return state.user;
    });
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch<any>(fetchUsers);
    },[]);

    if(loading) {
        return <h1>Loading...</h1>
    }
    if(error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {users.map((user: any) => {
                return <div key={user.id}>{user.name}</div>
            })}
        </div>
    );
};

export default UserList;
