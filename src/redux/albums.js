import Axios from "axios"

const GET_ALBUM = 'GET_ALBUM'
const GET_ALBUMS = 'GET_ALBUMS'

export const getAlbum = (album) => ({
  type: GET_ALBUM,
  data: album
})

export const getAlbums = (albums) => ({
  type: GET_ALBUMS,
  data: albums
})

const initialState = []

export const albumsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALBUM:
      return action.data
    case GET_ALBUMS:
      return action.data
    default:
      return state
  }
}

export const fetchAlbum = (id) => {
  return async function(dispatch) {
    try {
      let album = await Axios.get(`/api/albums/single/${id}`)
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

export const fetchAlbumsByBowie = (id) => {
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
