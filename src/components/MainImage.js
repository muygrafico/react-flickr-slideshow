import React from 'react'
import PropTypes from 'prop-types'

const MainImage = (props) => {
  return (
      <div className='main-image'
        style={{
            backgroundImage: 'url(' + props.photoURL + ')'
          }}>
          {props.children}
      </div>
  )
}

MainImage.propTypes = {
  photoURL: PropTypes.string,
  children: PropTypes.any
}

export default MainImage
