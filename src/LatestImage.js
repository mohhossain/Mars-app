import React from 'react'

function LatestImage({image}) {
  return (
    <div>
        <img height="250px" width="auto" style={{margin: '2px'}} src={image}></img>
    </div>
  )
}

export default LatestImage