import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { SignUpReducer } from "./SignUpReducer";

export const RootReducer = combineReducers({
  Auth: AuthReducer,
  signUp: SignUpReducer,
});