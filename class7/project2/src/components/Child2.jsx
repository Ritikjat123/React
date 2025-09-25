import React from 'react'
import { useContext } from 'react' 
import { myContext } from '..'
function Child2() {
    const userName=useContext(myContext);
  return (
    <div>
      {userName}
    </div>
  )
}

export default Child2
