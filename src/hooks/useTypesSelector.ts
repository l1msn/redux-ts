import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/reducers";

const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypesSelector;
