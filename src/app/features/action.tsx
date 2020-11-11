import { createSlice } from '@reduxjs/toolkit';

export const erpSlice = createSlice({
  name: 'erp',
  initialState: {
    token:0,
    name:'',
    id:0
  },
  reducers: {
    setToken: state => {
      state.token = 1;
    },
    setName: (state , action) => {
      state.name = action.payload;
    },
    setID:(state , action)=>{
      state.id = action.payload;
    }
  },
});

export const { setToken,setName,setID } = erpSlice.actions;
export const name = (state: any) => state.erp.name;
export const token = (state: {erp:any}) => state.erp.token;
export const id = (state: {erp:any}) => state.erp.id;

export default erpSlice.reducer;
