import { combineReducers } from "redux"
import favouritesReducer from "./favouritesReducer"

const rootReducer = combineReducers({
  favourites: favouritesReducer,
})

export default rootReducer
