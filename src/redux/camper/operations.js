import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampersRequest } from '../../services/camperService';


const getCampers = createAsyncThunk ('ads/get', async(_, thunkAPI) =>{
    try {
        const data = await getCampersRequest();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export default {getCampers};