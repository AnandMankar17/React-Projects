import React from 'react'

function Bag({count, id}) {
  return (
    <div>
        <h2>Apple:{count}</h2>
        <p>Bag:{id}{count==10 &&'full'}{count==0 && 'empty'}</p>
      
    </div>
  )
}

export default Bag
