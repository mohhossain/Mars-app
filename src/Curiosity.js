import React from 'react'


function Curiousity({roverImage, rovers}) {

    console.log(rovers)
  return (
    <div>
        <img height="250px" className='rover' src={roverImage}/>
    </div>
  )
}

export default Curiousity