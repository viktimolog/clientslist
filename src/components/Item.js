import React from 'react'
import PropTypes from 'prop-types'
import { Item } from 'semantic-ui-react'

const OneItem = ({item, setCurItem}) => (
  <Item onClick={setCurItem}>
    <Item.Image
      size='tiny'
      src={item.general.avatar}/>
    <Item.Content>
      <Item.Header>{item.general.firstName + ' ' + item.general.lastName}</Item.Header>
      <Item.Meta>{item.job.title}</Item.Meta>
    </Item.Content>
  </Item>
)

OneItem.propTypes = {
  setCurItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

export default OneItem