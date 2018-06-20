import {
  GET_ITEMS
} from './actionTypes'
import {
  GetItems
} from './axiosRequests'

export const getItems = () => dispatch => {
  GetItems()
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
}