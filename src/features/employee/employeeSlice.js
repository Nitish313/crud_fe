import { createSlice } from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
  name: 'employees',
  initialState: {employees: [], sortOrder: 'asc'},
  reducers: {
    viewEmployees: (state, action) => {
      let { employees, order } = action.payload
      let sortedEmployees = employees.slice().sort((a, b) => {
        if (order === 'asc') {
          return a.ename.localeCompare(b.ename);
        } else {
          return b.ename.localeCompare(a.ename);
        }
      });
      state.employees = sortedEmployees;
      state.sortOrder = order
    }
  },
});

export const { viewEmployees } = employeeSlice.actions;

// this is for configureStore
export default employeeSlice.reducer;
