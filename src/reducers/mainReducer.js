import {
  GET_ITEMS
 } from '../actions/actionTypes';

const initialState = {
   items: []
  };

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
      case GET_ITEMS: {
        return {
          ...state,
           items: action.payload
         }
      }

    default:
      return state;
  }
};

export default mainReducer;
