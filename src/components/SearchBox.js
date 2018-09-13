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
  }

  handleChange (evt) {
    this.setState({ value: evt.target.value })
    this.sendTextChange(evt.target.value.trim())
  }

  componentDidMount () {
        this.sendTextChange = debounce(this.sendTextChange, 500)
        this.setState({ value: this.props.searchValue })
  }

  sendTextChange (text) {
        console.log('debounced search')
        this.props.updateSeachValue(text)
        this.props.SearchImagesByName(text)
  }

  render () {
    return (
        <div className='searchbox'>
            <input
              className='searchbox__input'
              value={this.props.value}
              placeholder='type to search image'
              onChange={evt => this.handleChange(evt)}
          />
        </div>
    )
  }
}

SearchBox.propTypes = {
  updateSeachValue: PropTypes.func,
  SearchImagesByName: PropTypes.func.isRequired,
  value: PropTypes.string,
  searchValue: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)
