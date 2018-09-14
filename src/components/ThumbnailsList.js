import React from 'react'
import PropTypes from 'prop-types'
import Thumbnail from './Thumbnail'
import util from '../utils'

function buildMediaCards (photos, updateSelectedImageIndex, selectedImageIndex) {
  if (!photos) {
    return null
  }

  return photos.map((card, i) => {
    return (
        <li
          key={i}
          className={selectedImageIndex === i ? 'active' : null}
        >
            <Thumbnail
              photoURL={util.genURL(card, 'q')}
              index={i}
              updateSelectedImageIndex={updateSelectedImageIndex}
              />
            {selectedImageIndex}
            {i}
        </li>
    )
  })
}

const ThumbnailsList = (props) => {
  return (
      <ul className='thumbnails-list'>
          {buildMediaCards(props.photos, props.updateSelectedImageIndex, props.selectedImageIndex)}
      </ul>
  )
}

ThumbnailsList.propTypes = {
  updateSelectedImageIndex: PropTypes.func,
  photos: PropTypes.any,
  selectedImageIndex: PropTypes.number
}

export default ThumbnailsList
