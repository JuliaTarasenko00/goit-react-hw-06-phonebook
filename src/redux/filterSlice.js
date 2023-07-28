import { createSlice } from '@reduxjs/toolkit';

const tasksInitialState = {
  filters: '',
};

export const contactsFilter = createSlice({
  name: 'filterContacts',
  initialState: tasksInitialState.filters,
  reducers: {
    filterContacts(_, action) {
      return action.payload;
    },
  },
});

export const { filterContacts } = contactsFilter.actions;
