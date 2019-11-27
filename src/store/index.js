import { createStore } from 'redux'

const initialHero = { hero: null }

function hero(state = initialHero, action) {
  switch (action.type) {
    case 'SET_HERO':
      return {
        hero: action.hero
      }
    default:
      return state
  }
}

let store = createStore(hero)

export default store