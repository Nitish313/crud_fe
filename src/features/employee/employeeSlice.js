import { createSlice } from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
  name: 'employees',
  initialState: [],
  reducers: {
    viewEmployees: (state, action) => {
      const employees = action.payload

      state.push(...employees);
    }
  },
});

export const { viewEmployees } = employeeSlice.actions;

// this is for configureStore
export default employeeSlice.reducer;
