import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const Items = ({items, setCurItem}) => (
  <div className="ui items">
    {items.map(item =>
      <Item
        item={item}
        key={item.id}
        setCurItem={()=>setCurItem(item)}
      />
    )}
  </div>
)

export default Items

Items.propTypes = {
  items: PropTypes.array.isRequired,
  setCurItem: PropTypes.func.isRequired
}