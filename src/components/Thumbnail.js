import React from 'react'
import PropTypes from 'prop-types'

const Thumbnail = (props) => {
  return (
      <button className='thumbnail' style={{
        backgroundImage: 'url(' + props.photoURL + ')'
      }} />
  )
}

Thumbnail.propTypes = {
  photoURL: PropTypes.string
}

export default Thumbnail
