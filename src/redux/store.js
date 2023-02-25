import { createStore } from 'redux';
import initialContacts from 'services/contacts.json';

const reducer = store => {
  return store;
};

const inititialStore = {
  contacts: [...initialContacts],
  filter: '',
};

const store = createStore(
  reducer,
  inititialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const rootReducer = (state = appState, action) => {
//   return state;
// };
export default store;
