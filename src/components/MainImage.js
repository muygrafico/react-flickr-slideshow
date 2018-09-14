import React from 'react'
import PropTypes from 'prop-types'

const bgImage = (props) => {
  const defaultBg = 'https://s3.amazonaws.com/media.eremedia.com/uploads/2015/11/06150210/computer-700x467.jpg'
  return props.photoURL ? props.photoURL : defaultBg
}

const MainImage = (props) => {
  return (
      <div className='main-image'
        style={{
            backgroundImage: 'url(' + bgImage(props) + ')'
          }}>
          {props.children}
      </div>
  )
}

MainImage.propTypes = {
  children: PropTypes.any
}

export default MainImage
