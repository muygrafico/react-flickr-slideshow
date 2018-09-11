const initialState = {
  photos: []
}

export default (state = initialState, action) => {
 switch (action.type) {
  case 'PHOTOS_FETCH_DATA_SUCCESS':
    const response = action.photos
    const photoArray = response.photos.photo
    return Object.assign({}, state, { photos: photoArray })
  default:
   return state
 }
}
