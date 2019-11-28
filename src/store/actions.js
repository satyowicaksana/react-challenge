export const fetchHeroes = () => async dispatch => {
  const request = await fetch('https://akabab.github.io/superhero-api/api/all.json')
  const requestJson = await request.json()
  let marvelHeroes = []
  requestJson.forEach(hero => {
    if(hero.biography.publisher === 'Marvel Comics') {
      marvelHeroes.push(hero)
    }
  })
  shuffleArray(marvelHeroes)
  dispatch({
    type: 'SET_HEROES',
    heroes: marvelHeroes
  })
}

export const fetchHero = (id) => async dispatch => {
  const request = await fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
  const hero = await request.json()
  dispatch({
    type: 'SET_HERO',
    hero
  })
}

export const setHero = (hero) => {
  return {
    type: 'SET_HERO',
    hero
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}