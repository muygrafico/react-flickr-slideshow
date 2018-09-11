const initialState = {
  photos: [],
  searchValue: ''
}

export default (state = initialState, action) => {
 switch (action.type) {
  case 'PHOTOS_FETCH_DATA_SUCCESS':
    const response = action.photos
    const photoArray = response.photos.photo
    return Object.assign({}, state, { photos: photoArray })
  case 'SEARCH_VALUE_UPDATED':
    return Object.assign({}, state, { searchValue: action.newValue })
  default:
   return state
 }
}
