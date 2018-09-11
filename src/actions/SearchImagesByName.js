// https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&user_id=' + authorId + '&per_page=' + perPage + '&page=' + page + '&format=json&nojsoncallback=1'
import axios from 'axios'

const baseURl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=?&api_key='
const apikey = '1a0f137ab196953931f4c9100dac0dcf'
const url = baseURl + apikey + '&tags=japan'
console.log(url)

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

export function SearchImagesByName () {
    // We return a function instead of an action object
    return (dispatch) => {
        axios.get(url)
        .then(res => {
          dispatch(photosFetchDataSuccess(res.data))
        })
        .catch(err => {
          console.log(err)
          dispatch(photosHasErrored(err))
        })
    }
}
