import { SET_FILTER } from './filter-types';

const inititialState = '';

const filterReducer = (state = inititialState, { type, payload }) => {
  switch (type) {
    case SET_FILTER:
      return payload;
    default:
      return state;
  }
};

export default filterReducer;
