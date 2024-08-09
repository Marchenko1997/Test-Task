// operations.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampersRequest } from '../../services/camperService';
import { toast } from 'react-hot-toast';


export const getCampers = createAsyncThunk('ads/get', async (_, thunkAPI) => {
    try {
      const data = await getCampersRequest();
      return data;
    } catch (error) {
      toast.error(
        'Error fetching campers. Try reloading the page or come back later.'
      );
      return thunkAPI.rejectWithValue(error);
    }
  });