import { combineReducers } from 'redux';
import { songsReducer } from './songs'
import { bowiesReducer } from './bowies'
import { albumsReducer } from './albums'

const appReducer = combineReducers({
  songs: songsReducer,
  bowies: bowiesReducer,
  albums: albumsReducer
})

export default appReducer
