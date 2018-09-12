import React from 'react'
import PropTypes from 'prop-types'

const Slideshow = (props) => {
  return (
      <div className='slideshow'
        style={{
            backgroundImage: 'url(' + props.photoURL + ')'
          }}>
          {props.children}
      </div>
  )
}

Slideshow.propTypes = {
  photoURL: PropTypes.string,
  children: PropTypes.any
}

export default Slideshow
