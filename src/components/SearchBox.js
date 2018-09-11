import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateSeachValue } from '../actions/SearchImagesByName'
// import debounce from 'lodash/debounce'

const mapStateToProps = (store) => {
  return {
    searchValue: store.DataReducer.searchValue
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateSeachValue: (newValue) => dispatch(updateSeachValue(newValue))
  }
}

class SearchBox extends Component {
  handleChange (evt) {
    this.props.updateSeachValue(evt.target.value)
  }

  render () {
    return (
        <div>
            <input
              value={this.props.searchValue}
              onChange={evt => this.handleChange(evt)}
          />
        </div>
    )
  }
}

SearchBox.propTypes = {
  searchValue: PropTypes.string,
  updateSeachValue: PropTypes.any
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)
