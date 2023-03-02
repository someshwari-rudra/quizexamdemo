import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { OnChangeReducer } from "./OnChange_reducer";
import { SignUpReducer } from "./SignUpReducer";
import { StudentReducer } from "./StudentReducer";
import { TeacherReducer } from "./TeacherReducer";

export const RootReducer = combineReducers({
  Auth: AuthReducer,
  signUp: SignUpReducer,
  teacher: TeacherReducer,
  student:StudentReducer,
  OnChangeReducer: OnChangeReducer,
});