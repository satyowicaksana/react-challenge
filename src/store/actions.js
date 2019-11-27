export const fetchHeroes = () => async dispatch => {
  console.log('fetch heroes actions')
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
    type: 'FETCH_HEROES',
    heroes: marvelHeroes
  })
}

export const fetchHero = (id) => async dispatch => {
  console.log(`fetch hero ${id}`)
  const request = await fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
  const hero = await request.json()
  dispatch({
    type: 'FETCH_HERO',
    hero
  })
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}