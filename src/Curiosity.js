import React from 'react'


function Curiousity({roverImage, rovers, onRoverChange}) {

  const handleClick = () => {

    onRoverChange('curiosity')

  }
 

    console.log(rovers)
  return (
    <div style={{cursor: 'pointer'}} onClick={(handleClick)}>
        <img height="250px" className='rover' src={roverImage}/>
    </div>
  )
}

export default Curiousity