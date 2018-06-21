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

      let arr = []
      for (let i = 0; i < action.data.length; i++) {
        if (action.data[i].general.firstName.toLowerCase().includes(action.text.toLowerCase())) {
          arr.push(action.data[i])
          continue
        }
        if (action.data[i].general.lastName.toLowerCase().includes(action.text.toLowerCase())) {
          arr.push(action.data[i])
          continue
        }
        if (action.data[i].job.company.toLowerCase().includes(action.text.toLowerCase())) {
          arr.push(action.data[i])
          continue
        }
        if (action.data[i].job.title.toLowerCase().includes(action.text.toLowerCase())) {
          arr.push(action.data[i])
          continue
        }
        if (action.data[i].contact.email.toLowerCase().includes(action.text.toLowerCase())) {
          arr.push(action.data[i])
          continue
        }
        if (action.data[i].contact.phone.toLowerCase().includes(action.text.toLowerCase())) {
          arr.push(action.data[i])
          continue
        }
        if (action.data[i].address.street.toLowerCase().includes(action.text.toLowerCase())) {
          arr.push(action.data[i])
          continue
        }
        if (action.data[i].address.city.toLowerCase().includes(action.text.toLowerCase())) {
          arr.push(action.data[i])
          continue
        }
        if (action.data[i].address.zipCode.toLowerCase().includes(action.text.toLowerCase())) {
          arr.push(action.data[i])
          continue
        }
        if (action.data[i].address.country.toLowerCase().includes(action.text.toLowerCase())) {
          arr.push(action.data[i])
          continue
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