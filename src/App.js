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

const renderTitle = (props) => {
    return props.photos &&
    props.photos[props.selectedImageIndex] &&
    props.photos[[props.selectedImageIndex]].title
        ? <p className='slideshow-title'>{props.photos[props.selectedImageIndex].title}</p>
        : null
  }

  renderTitle.propTypes = {
    selectedImageIndex: PropTypes.any,
    photos: PropTypes.any
  }

class App extends Component {
  SearchImagesByName (event) {
    this.props.SearchImagesByName(this.props.searchValue)
  }

  render () {
    const selectedImage = this.props.selectedImageIndex
    return (
        <div className='slideshow-container'>
            <Slideshow photoURL={util.genURL(this.props.photos[selectedImage], 'h')} >
                <header className='slideshow-header'>
                    <SearchBox />
                    {renderTitle(this.props)}
                </header>
            </Slideshow>
            <ThumbnailsList photos={this.props.photos}
              updateSelectedImageIndex={this.props.updateSelectedImageIndex}
              />
        </div>
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
