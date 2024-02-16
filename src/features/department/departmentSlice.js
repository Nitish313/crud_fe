import { createSlice } from '@reduxjs/toolkit';

export const departmentSlice = createSlice({
  name: 'departments',
  initialState: [],
  reducers: {
    viewDepartments: (state, action) => {
      const departments = action.payload
      state.push(...departments);
    },
  }
});

export const { viewDepartments } = departmentSlice.actions;
export default departmentSlice.reducer;
