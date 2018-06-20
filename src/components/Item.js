import React from 'react'
import PropTypes from 'prop-types'

const Item = ({item, setCurItem}) => (
  <div className="ui divided items" onClick={setCurItem}>
    <img className="ui small image" alt='avatar' src={item.general.avatar}/>
      </div>
  )

Item.propTypes = {
  setCurItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

export default Item
