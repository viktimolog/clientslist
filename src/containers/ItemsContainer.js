import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Items from '../components/Items'
import { setCurItem } from '../actions/actionCreator'

const ItemsContainer = ({ items, setCurItem }) => (
  <Items
    items = {items}
    setCurItem={setCurItem}/>)

ItemsContainer.propTypes = {
  items: PropTypes.array.isRequired,
  setCurItem: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  items: state.mainReducer.items
})

const mapDispatchToProps = {
  setCurItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);

