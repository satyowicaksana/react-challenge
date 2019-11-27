import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'

const initialHero = { heroes: [], hero: null }

function hero(state = initialHero, action) {
  switch (action.type) {
    case 'FETCH_HEROES':
      return {
        ...state,
        heroes: action.heroes
      }
    case 'FETCH_HERO':
      return {
        ...state,
        hero: action.hero
      }
    default:
      return state
  }
}

let store = createStore(hero, applyMiddleware(Thunk))

export default store