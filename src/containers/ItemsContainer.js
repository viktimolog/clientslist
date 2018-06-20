import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Items from '../components/Items'
import { getItems, setCurItem } from '../actions/actionCreator'

class ItemsContainer extends React.Component {

  componentDidMount () {
    this.props.getItems()
  }

  render () {
    return (
      <Items
        items={this.props.items}
        setCurItem={this.props.setCurItem}/>)
  }
}

ItemsContainer.propTypes = {
  items: PropTypes.array.isRequired,
  setCurItem: PropTypes.func.isRequired,
  getItems: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  items: state.mainReducer.items
})

const mapDispatchToProps = {
  setCurItem,
  getItems
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)

