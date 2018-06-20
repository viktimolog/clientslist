import React from 'react'
import PropTypes from 'prop-types'

const Item = ({item, setCurItem}) => (

<div className="item" onClick={setCurItem}>
  <div className="image">
    <img src={item.general.avatar}/>
  </div>
  <div className="content">
    <a className="header">Header</a>
    <div className="meta">
      <span>Description</span>
    </div>
    <div className="description">
      <p></p>
    </div>
    <div className="extra">
      Additional Details
    </div>
  </div>
</div>
)

Item.propTypes = {
  setCurItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

export default Item