import React from 'react'
import PropTypes from 'prop-types'
import Thumbnail from './Thumbnail'
import util from '../utils'

function buildMediaCards (photos) {
  if (!photos) {
    return null
  }
  console.log(photos)
  return photos.map((card, i) => {
    return (
        <li key={i}>
            <Thumbnail photoURL={util.genURL(card)} />
        </li>
    )
  })
}

const ThumbnailsList = (props) => {
  return (
      <ul className='thumbnails-list'>
          {buildMediaCards(props.photos)}
      </ul>
  )
}

ThumbnailsList.propTypes = {
  // photoURL: PropTypes.string,
  photos: PropTypes.any
}

export default ThumbnailsList
