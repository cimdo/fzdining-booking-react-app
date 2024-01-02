import {configureStore} from '@reduxjs/toolkit';
import accountsReducer from './accounts/accounts.slice';
import restaurantsReducer from './restaurants/restaurants.slice';
import userReducer from './user/user.slice';


const store = configureStore({
    reducer: {
       accounts: accountsReducer,
       restaurants: restaurantsReducer,
       user: userReducer
      
    }
})
export default store;