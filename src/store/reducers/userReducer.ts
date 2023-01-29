import IUserState from "../../interfaces/user/IUserState";
import IUserAction from "../../interfaces/user/IUserAction";
import USER_ACTIONS_TYPES from "../../const/userActionTypes";

const initialState: IUserState = {
    users: [],
    loading: false,
    error: null
}


function userReducer(state: IUserState = initialState, action: IUserAction): IUserState {
    switch (action.type) {
        case USER_ACTIONS_TYPES.FETCH_USERS:
            return {
                loading: true, error: null, users: []
            }
        case USER_ACTIONS_TYPES.FETCH_USERS_SUCCESS:
            return {
                loading: false, error: null, users: action.payload
            }
        case USER_ACTIONS_TYPES.FETCH_USERS_ERROR:
            return {
                loading: false, error: action.payload, users: []
            }
        default:
            return state;
    }
}

export default userReducer;
