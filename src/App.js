import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SearchBox from './components/SearchBox.js'
import { SearchImagesByName, updateSelectedImageIndex } from './actions/SearchImagesByName'
import Slideshow from './components/Slideshow.js'
import ThumbnailsList from './components/ThumbnailsList.js'
import util from './utils'

const mapStateToProps = (store) => {
  return {
    photos: store.DataReducer.photos,
    searchValue: store.DataReducer.searchValue,
    selectedImageIndex: store.DataReducer.selectedImageIndex
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    SearchImagesByName: (tags) => dispatch(SearchImagesByName(tags)),
    updateSelectedImageIndex: (newIndex) => dispatch(updateSelectedImageIndex(newIndex))
  }
}

class App extends Component {
  SearchImagesByName (event) {
    this.props.SearchImagesByName(this.props.searchValue)
  }

  render () {
    return (
        <Slideshow photoURL={util.genURL(this.props.photos[this.props.selectedImageIndex])} >
            <header className='slideshow-header'>
                <SearchBox />
            </header>
            <ThumbnailsList photos={this.props.photos}
              updateSelectedImageIndex={this.props.updateSelectedImageIndex}
              />
        </Slideshow>
    )
  }
}

App.propTypes = {
  SearchImagesByName: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
  photos: PropTypes.any,
  updateSelectedImageIndex: PropTypes.any,
  selectedImageIndex: PropTypes.any
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
