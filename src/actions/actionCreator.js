import {
  GET_ITEMS,
  SET_CURITEM,
  FIND_ITEMS
} from './actionTypes'
import {
  GetItems
} from './axiosRequests'
import {TextConstants} from '../constants/TextConstants'

export const getItems = () => dispatch => {
  GetItems()
    .then(res => {
        dispatch({
          type: GET_ITEMS,
          payload: res.data
        })
      }
    )
    .catch(err => {
        alert(TextConstants.SERVETNOTRESP)
        dispatch({
          type: GET_ITEMS,
          payload: []
        })
      }
    )
}

export const setCurItem = curItem => dispatch => {
  dispatch({
    type: SET_CURITEM,
    curItem
  })
}

export const findItems = text => dispatch => {
  GetItems()
    .then(res =>
      dispatch({
        type: FIND_ITEMS,
        data: res.data,
        text: text
      })
    )
    .catch(err => {
        alert(TextConstants.SERVETNOTRESP)
        dispatch({
          type: GET_ITEMS,
          payload: []
        })
      }
    )
}