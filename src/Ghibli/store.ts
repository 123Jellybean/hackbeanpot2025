import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Movies/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Movies/Assignments/reducer"
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentReducer,
  },
});
export default store;