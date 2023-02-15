import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { SignUpReducer } from "./SignUpReducer";
import { TeacherReducer } from "./TeacherReducer";

export const RootReducer = combineReducers({
  Auth: AuthReducer,
  signUp: SignUpReducer,
  teacher:TeacherReducer,
});