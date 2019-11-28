import React, { useState, useEffect } from 'react';
import TitleBadge from './TitleBadge'
import './InfoPower.css'

export default (props) => {
  const { hero } = props
  const [abilities, setAbilities] = useState([])

  useEffect(() => {
    let stats = Object.values(hero.powerstats);
    let max = Math.max(...stats);
    let result = []
    for(let ability in hero.powerstats) {
      if(hero.powerstats[ability] === max) {
        result.push(ability)
      }
    }
    setAbilities(result)
  }, [hero.powerstats])

  return (
    <div>
      <TitleBadge title={'ABILITY TYPE'}></TitleBadge>
        {
          abilities.map((ability, i) => (
            <span key={ability}>
              <div>
              <img className="power-image" src={require(`../assets/${ability}.png`)} alt="combat"/>
              { ability.toUpperCase() }
              </div>
            </span>
          ))
        }
    </div>
  )
}