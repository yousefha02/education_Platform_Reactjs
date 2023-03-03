import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  admin:null,
  token:null
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    adminLogin: (state,action) => {
        state.admin = action.payload.admin;
    },
    adminLogout:(state)=>{
        state.admin = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { adminLogin ,adminLogout} = adminSlice.actions

export default adminSlice.reducer