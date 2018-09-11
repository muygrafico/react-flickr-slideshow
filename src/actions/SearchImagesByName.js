import axios from 'axios'
import { API_KEY, API_URL } from '../constants/configs'

// warns if there is no REACT_APP_FLICKR_API_KEY for API requests
if (!API_KEY) {
  const error = {
    error: 'no REACT_APP_FLICKR_API_KEY',
    hint: 'create a .env file and put REACT_APP_FLICKR_API_KEY with a key value'
    }
  console.warn(error)
}

export function photosHasErrored (error) {
    return {
        type: 'PHOTOS_HAS_ERRORED',
        hasErrored: error
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

export function SearchImagesByName (tags) {
    return (dispatch) => {
        axios.get(API_URL + API_KEY + `&tags=${tags}`)
        .then(res => {
          dispatch(photosFetchDataSuccess(res.data))
        })
        .catch(err => {
          console.log(err)
          dispatch(photosHasErrored(err))
        })
    }
}
