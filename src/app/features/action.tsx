import { createSlice } from '@reduxjs/toolkit';

export const erpSlice = createSlice({
  name: 'erp',
  initialState: {
    token:false,
    name:'',
  },
  reducers: {
    setToken: state => {
      state.token = true;
    },
    setName: (state , action) => {
      state.name = action.payload;
    },
  },
});

export const { setToken,setName } = erpSlice.actions;
export const name = (state: any) => state.erp.name;
export const token = (state: {erp:any}) => state.erp.token;

export default erpSlice.reducer;
