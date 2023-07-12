import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const RoomByLocationSlice = createSlice({
  name: 'RoomByLocationSlice',
  initialState: {
    listRoom: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchRoomsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchRoomsSuccess: (state, action) => {
      state.loading = false;
      state.rooms = action.payload;
    },
    fetchRoomsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchRoomsStart, fetchRoomsSuccess, fetchRoomsFailure } = RoomByLocationSlice.actions;

export const fetchRooms = () => async (dispatch) => {
  dispatch(fetchRoomsStart());
  try {
    const response = await axios.get('https://airbnbnew.cybersoft.edu.vn/api/phong-thue/lay-phong-theo-vi-tri');
    dispatch(fetchRoomsSuccess(response.data));
  } catch (error) {
    dispatch(fetchRoomsFailure(error.message));
  }
};

export default RoomByLocationSlice.reducer;
