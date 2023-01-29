import USER_ACTIONS_TYPES from "../../const/userActionTypes";
import {Dispatch} from "redux";
import IUserAction from "../../interfaces/user/IUserAction";
import axios from "axios";

async function fetchUsers(dispatch: Dispatch<IUserAction>) {
    try {
        dispatch({
            type: USER_ACTIONS_TYPES.FETCH_USERS
        })
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setTimeout((): void => {
            dispatch({
                type: USER_ACTIONS_TYPES.FETCH_USERS_SUCCESS,
                payload: response.data
            })
        },500);
    } catch (e) {
        dispatch({
            type: USER_ACTIONS_TYPES.FETCH_USERS_ERROR,
            payload: "Error fetch!"
        })
    }
}

export default fetchUsers;
