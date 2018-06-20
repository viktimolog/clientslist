import React from 'react'
import PropTypes from 'prop-types'
import { img } from 'semantic-ui-react'

const Item = ({item, setCurItem}) => (

<div className="item" onClick={setCurItem}>
  <div className="image">
    <img src={item.general.avatar}/>
  </div>
  <div className="content">
    <a className="header">{item.general.firstName + ' '+item.general.lastName}</a>
    <div className="meta">
      <span>{item.job.title}</span>
    </div>
  </div>
</div>
)

Item.propTypes = {
  setCurItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

export default Item