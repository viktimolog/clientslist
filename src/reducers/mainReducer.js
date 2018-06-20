import {
  FIND_ITEMS,
  GET_ITEMS,
  SET_CURITEM,
} from '../actions/actionTypes'

const initialState = {
   items: [],
   curItem: false
  };

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
      case GET_ITEMS: {
        return {
          ...state,
           items: action.payload
         }
      }

    case SET_CURITEM: {
      return {
        ...state,
        curItem: action.curItem
      }
    }

    case FIND_ITEMS: {
      return {
        ...state,
        //TODO create filter for the search
        // items: action.items.filter...
      }
    }

    default:
      return state;
  }
};

export default mainReducer;
