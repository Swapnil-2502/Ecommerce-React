import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './userReducer'
import cartReducer from './cartReducer'
import wishlistReducer from './wishlistReducer'
import currentProductReducer from './currentProductReducer'

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    currentProduct: currentProductReducer
})

export default rootReducer;