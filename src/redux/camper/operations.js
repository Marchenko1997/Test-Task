// operations.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampersRequest } from '../../services/camperService';

// Экспорт как именованный экспорт
export const getCampers = createAsyncThunk('ads/get', async (_, thunkAPI) => {
    try {
      const data = await getCampersRequest();
      console.log('Fetched data:', data);
      return data;
    } catch (error) {
      console.error('Error fetching campers:', error);
      return thunkAPI.rejectWithValue(error);
    }
  });