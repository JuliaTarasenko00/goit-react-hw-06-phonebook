import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksInitialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: tasksInitialState.contacts,
  reducers: {
    addContacts: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (name, number) => {
        const id = nanoid();
        return { payload: { name, number, id } };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContacts, deleteContact } = contactsSlice.actions;
