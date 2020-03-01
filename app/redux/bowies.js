const axios = require('axios')

const SET_BOWIES = 'SET_BOWIES';
const SET_BOWIE = 'SET_BOWIE'

export const setBowies = (bowies) => ({
  type: SET_BOWIES,
  data: bowies
})

export const setBowie = (bowie) => ({
  type: SET_BOWIE,
  data: bowie
})

const initialState = []

export const bowiesReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_BOWIES:
      return action.data
    case SET_BOWIE:
      return action.data
    default:
      return state
  }
}

export function fetchBowies() {
  return async function(dispatch) {
    try {
      let bowies = await axios.get('/api/bowies')
      if (bowies) {
        dispatch(setBowies(bowies.data))
      }
    } catch(err) {
      console.log(err)
    }
  }
}

export function fetchBowie(id) {
  return async function(dispatch) {
    try {
      let bowie = await axios.get(`/api/bowies/${id}`)
      if (bowie) {
        dispatch(setBowie(bowie.data))
      } else {
        console.log(`Bowie not found!`)
      }
    } catch(err) {
      console.log(error)
    }
  }
}
