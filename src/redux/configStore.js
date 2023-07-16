import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/Search';
import roomByLocationReducer from './slices/RoomByLocation'
const store = configureStore({
  reducer: {
    searchReducer,
    roomByLocationReducer,
  },
});

export default store;
