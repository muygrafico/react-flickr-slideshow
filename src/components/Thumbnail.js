import React from 'react'
import PropTypes from 'prop-types'

const Thumbnail = (props) => {
  return (
      <button
        onClick={(e) => props.updateSelectedImageIndex(props.index)}
        className='thumbnail' style={{
          backgroundImage: 'url(' + props.photoURL + ')'
        }} />
  )
}

Thumbnail.propTypes = {
  photoURL: PropTypes.string,
  updateSelectedImageIndex: PropTypes.any,
  index: PropTypes.any
}

export default Thumbnail
