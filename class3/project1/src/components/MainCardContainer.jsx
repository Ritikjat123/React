import React from 'react'
import SingleCardContainer from './SingleCardContainer'

function MainCardContainer({sendingp}) {
  return (
    <div>
      <SingleCardContainer sendingp={sendingp}></SingleCardContainer>
    </div>
  )
}

export default MainCardContainer
