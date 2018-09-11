import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SearchBox from './components/SearchBox.js'
import { SearchImagesByName } from './actions/SearchImagesByName'
import Slideshow from './components/Slideshow.js'
const genURL = function (imgData) {
  if (imgData) {
    return `https://farm${imgData.farm}.staticflickr.com/${imgData.server}/${imgData.id}_${imgData.secret}.jpg`
  }
}

const mapStateToProps = (store) => {
  return {
    photos: store.DataReducer.photos[0],
    searchValue: store.DataReducer.searchValue
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    SearchImagesByName: (tags) => dispatch(SearchImagesByName(tags))
  }
}

class App extends Component {
  SearchImagesByName (event) {
    this.props.SearchImagesByName(this.props.searchValue)
  }

  render () {
    return (
        <Slideshow photoURL={genURL(this.props.photos)} >
            <header className='slideshow-header'>
                <SearchBox />
            </header>
        </Slideshow>
    )
  }
}

App.propTypes = {
  SearchImagesByName: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
  photos: PropTypes.any
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
