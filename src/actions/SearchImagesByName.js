import { API_KEY, API_URL } from '../constants/configs'

// warns if there is no REACT_APP_FLICKR_API_KEY for API requests
if (!API_KEY) {
  const error = {
    error: 'no REACT_APP_FLICKR_API_KEY',
    hint: 'create a .env file and put REACT_APP_FLICKR_API_KEY with a key value'
    }
  console.warn(error)
}

export function photosHasErrors (errors) {
    return {
        type: 'PHOTOS_HAS_ERRORS',
        errors
    }
}
export function photosIsLoading (bool) {
    return {
        type: 'PHOTOS_IS_LOADING',
        isLoading: bool
    }
}
export function photosFetchDataSuccess (photos) {
    return {
        type: 'PHOTOS_FETCH_DATA_SUCCESS',
        photos
    }
}

export function updateSeachValue (newValue) {
    return {
        type: 'SEARCH_VALUE_UPDATED',
        newValue
    }
}

export function updateSelectedImageIndex (newIndex) {
    return {
        type: 'SELECTED_IMAGE_INDEX_UPDATED',
        newIndex
    }
}

export function SearchImagesByName (tags) {
    const url = API_URL + API_KEY + `&tags=${tags}`

    return (dispatch) => {
      fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          response.json().then(json => {
            json.stat !== 'fail'
            ? dispatch(photosFetchDataSuccess(json))
            : dispatch(photosHasErrors(json))
          })
        }
      })
    }
}
