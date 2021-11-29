import customerReducer from "./customer-reducer";
import billpaymentReducer from "./bp-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  customer: customerReducer,
  bpdetais: billpaymentReducer
 
});


export default rootReducer;