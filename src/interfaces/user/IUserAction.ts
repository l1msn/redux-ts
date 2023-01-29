import USER_ACTIONS_TYPES from "../../const/userActionTypes";

interface IFetchUserAction {
    type: USER_ACTIONS_TYPES.FETCH_USERS,
}

interface IFetchUserSuccessAction {
    type: USER_ACTIONS_TYPES.FETCH_USERS_SUCCESS,
    payload: any[]
}

interface IFetchUserErrorAction {
    type: USER_ACTIONS_TYPES.FETCH_USERS_ERROR,
    payload: string
}

type IUserAction = IFetchUserAction | IFetchUserSuccessAction | IFetchUserErrorAction;

export default IUserAction;
