import Axios from "axios"

const GET_ALBUM = 'GET_ALBUM'

export const getAlbum = (album) => ({
  type: GET_ALBUM,
  data: album
})

const initialState = []

export const albumsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALBUM:
      return action.data
    default:
      return state
  }
}

export const fetchAlbum = (id) => {
  return async function(dispatch) {
    try {
      let album = await Axios.get(`/api/albums/${id}`)
      if (album) {
        dispatch(getAlbum(album.data))
      } else {
        console.log(`Album not found!`)
      }
    } catch(err) {
      console.log(err)
    }
  }
}
