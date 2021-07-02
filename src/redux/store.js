import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import navigationReducer from './navigationReducer'
import reviewsReducer from "./reviewsReducer";
import thunkMiddleware from "redux-thunk";
import bookingReducer from "./bookingReducer";
import menuReducer from "./menuReducer";
import cartReducer from "./cartReducer";
import aboutReducer from "./aboutReducer";
import contactReducer from "./contactReducer";

const reducers = combineReducers({
    navigationInfo: navigationReducer,
    reviewsInfo: reviewsReducer,
    booking: bookingReducer,
    aboutPage: aboutReducer,
    contactPage: contactReducer,
    menuPage: menuReducer,
    cart: cartReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
