import React from 'react'
import PropTypes from 'prop-types'
import Thumbnail from './Thumbnail'
import util from '../utils'

function buildMediaCards (photos, updateSelectedImageIndex) {
  if (!photos) {
    return null
  }

  return photos.map((card, i) => {
    return (
        <li key={i}>
            <Thumbnail
              photoURL={util.genURL(card, 'q')}
              index={i}
              updateSelectedImageIndex={updateSelectedImageIndex}
              />
        </li>
    )
  })
}

const ThumbnailsList = (props) => {
  return (
      <ul className='thumbnails-list'>
          {buildMediaCards(props.photos, props.updateSelectedImageIndex)}
      </ul>
  )
}

ThumbnailsList.propTypes = {
  updateSelectedImageIndex: PropTypes.func,
  photos: PropTypes.any
}

export default ThumbnailsList
