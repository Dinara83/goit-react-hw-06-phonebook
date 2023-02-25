import { ADD_CONTACT, DELETE_CONTACT } from './types';

const inititialState = {
  contacts: [],
  filter: '',
};

const reducer = (state = inititialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContacts = [...state.contacts, action.payload];
      return { ...state, contacts: newContacts };
    case DELETE_CONTACT:
      const result = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      return { ...state, contacts: result };
    default:
      return state;
  }
};

export default reducer;
