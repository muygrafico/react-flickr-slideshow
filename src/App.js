import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SearchBox from './components/SearchBox.js'
import { PhotosActions, updateSelectedImageIndex } from './actions/PhotosActions'
import MainImage from './components/MainImage.js'
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
    PhotosActions: (tags) => dispatch(PhotosActions(tags)),
    updateSelectedImageIndex: (newIndex) => dispatch(updateSelectedImageIndex(newIndex))
  }
}

const renderTitle = (props) => {
    return props.photos &&
    props.photos[props.selectedImageIndex] &&
    props.photos[[props.selectedImageIndex]].title
        ? <p className='main-image__title'>{props.photos[props.selectedImageIndex].title}</p>
        : <p className='main-image__title'>please select an image if available</p>
  }

  renderTitle.propTypes = {
    selectedImageIndex: PropTypes.any,
    photos: PropTypes.any
  }

class App extends Component {
  PhotosActions (event) {
    this.props.PhotosActions(this.props.searchValue)
  }

  render () {
    const selectedImage = this.props.selectedImageIndex
    return (
        <div className='slideshow'>
            <header className='slideshow__header'>
                <SearchBox />
            </header>
            <MainImage photoURL={util.genURL(this.props.photos[selectedImage], 'b')} />
            {renderTitle(this.props)}
            <ThumbnailsList
              photos={this.props.photos}
              selectedImageIndex={this.props.selectedImageIndex}
              updateSelectedImageIndex={this.props.updateSelectedImageIndex}
              />
        </div>
    )
  }
}

App.propTypes = {
  PhotosActions: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
  photos: PropTypes.any,
  updateSelectedImageIndex: PropTypes.any,
  selectedImageIndex: PropTypes.any
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
