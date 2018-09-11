import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { SearchImagesByName, updateSeachValue } from '../actions/SearchImagesByName'
import debounce from 'lodash/debounce'

const mapStateToProps = (store) => {
  return {
    searchValue: store.DataReducer.searchValue
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateSeachValue: (newValue) => dispatch(updateSeachValue(newValue)),
    SearchImagesByName: (tags) => dispatch(SearchImagesByName(tags))
  }
}

class SearchBox extends Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
    this.updateSeachValue = debounce(this.props.updateSeachValue, 500)
  }
  handleChange (evt) {
    const val = evt.target.value
    this.setState({ value: val }, () => {
      this.updateSeachValue(val)
      this.props.SearchImagesByName(val)
    })
  }

  render () {
    return (
        <div>
            <input
              value={this.props.value}
              onChange={evt => this.handleChange(evt)}
          />
        </div>
    )
  }
}

SearchBox.propTypes = {
  updateSeachValue: PropTypes.any,
  SearchImagesByName: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)
