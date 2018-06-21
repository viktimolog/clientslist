import React from 'react'
import PropTypes from 'prop-types'
import OneItem from './Item'
import { Item } from 'semantic-ui-react'

const Items = ({items, setCurItem}) => (
  <Item.Group link>
    {items.map(item =>
      <OneItem
        item={item}
        setCurItem={() => setCurItem(item)}
      />
    )}
  </Item.Group>
)

export default Items

Items.propTypes = {
  items: PropTypes.array.isRequired,
  setCurItem: PropTypes.func.isRequired
}