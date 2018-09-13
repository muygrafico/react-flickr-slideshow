const initialState = {
  photos: [],
  searchValue: '',
  selectedImageIndex: null
}

export default (state = initialState, action) => {
 switch (action.type) {
  case 'PHOTOS_FETCH_DATA_SUCCESS':
    const response = action.photos
    const photoArray = response.photos.photo
    return Object.assign({}, state, { photos: photoArray })
  case 'SEARCH_VALUE_UPDATED':
    return Object.assign({}, state, { searchValue: action.newValue })
  case 'SELECTED_IMAGE_INDEX_UPDATED':
    return Object.assign({}, state, { selectedImageIndex: action.newIndex })
   case 'PHOTOS_HAS_ERRORS':
      console.warn(action.errors)
      return state
  default:
   return state
 }
}
