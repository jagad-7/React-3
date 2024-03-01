import React from 'react'

function Hero(heroName) {
    if(heroName = 'joker'){
        throw new Error ('It is not a Hero')
    }
  return (
    <div>{heroName}</div>
  )
}

export default Hero