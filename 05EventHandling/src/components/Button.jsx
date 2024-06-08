import React from 'react'

function Button({image, fun}) {
  return (
    <div>
      <button onClick={fun} style={{height:'5px' , width:'5px', backgroundSize:"cover"}}>

        <img src={image} alt="some image" />
      </button>
    </div>
  )
}

export default Button
