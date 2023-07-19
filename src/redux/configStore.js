import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/Search';
import userReducer from './slices/userReducer';
import loginReducer from './slices/loginReducer'
const store = configureStore({
  reducer: {
    searchReducer,
    userReducer,
    loginReducer,
  },
});

export default store;
