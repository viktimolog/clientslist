import {
  FIND_ITEMS,
  GET_ITEMS,
  SET_CURITEM
} from '../actions/actionTypes'

const initialState = {
  items: [],
  curItem: false
}

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
      if (action.text === '')
        return {
          ...state,
          items: action.data
        }

      const searchText = obj => {
        for (let k in obj) {
          const i = obj[k]
          if (typeof i === 'string' && ~i.toLowerCase().indexOf(action.text.toLowerCase()) && k !== 'avatar') {
            return true
          }
        }
        return false
      }

      let arr = []
      for (let i = 0; i < action.data.length; i++) {
        for (let k in action.data[i]) {
          const j = action.data[i][k]
          if (searchText(j)) {
            arr.push(action.data[i])
            break
          }
        }
      }

      return {
        ...state,
        items: arr
      }
    }

    default:
      return state
  }
}

export default mainReducer