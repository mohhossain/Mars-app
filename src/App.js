import logo from './logo.svg';
import './App.css';
import Curiosity from './Curiosity';
import Perseverance from './Perseverance';
import {useState, useEffect} from 'react'
import LatestImage from './LatestImage';

function App() {
  const rovers = ['Curiosity', 'Perseverance']
  const rover_image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Mars_2020_Rover_-_Artist%27s_Concept.png/1200px-Mars_2020_Rover_-_Artist%27s_Concept.png'

  const [clickCount, setClickCount] = useState(0)
  const [latestImages, setLatestImages] = useState([])
  // clickCount = 0
  // setClickCount(100)


  const handleCuriousityClick = () => {
    console.log('Curiosity was clicked')
    setClickCount(clickCount + 1)

    console.log(clickCount)

  }  

  const handlePerseveranceClick = () => {
    console.log('Perseverance was clicked')
    setClickCount(clickCount + 1)

    console.log(clickCount)
  }


  useEffect(()=>{
    console.log('it is fetching!!')
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?sol=1000&api_key=1vqM375yXHsdDE70mKqxWcgrOJMjK3BavOpJm4Es')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setLatestImages(data.latest_photos)
  })
  }, [])

  // [] => only load once when the app loads

  



  return (
    <div className="App">
      <h1>Mars App</h1>

      <p>{clickCount}</p>
      <div className='rover-container'>

        <div style={{cursor: 'pointer'}} onClick={handleCuriousityClick}>
          <Curiosity  roverImage={rover_image} rovers={rovers}></Curiosity>
        </div>

        <div style={{cursor: 'pointer'}} onClick={handlePerseveranceClick}>
          <Perseverance roverImage={rover_image} rovers={rovers}></Perseverance>

        </div>

        

      </div>

      <div className='image-container'>

        {latestImages.map( image => {
          return <LatestImage key={image.id} image={image.img_src}/>;
        })}
        
      </div>
      
    </div>
  );
}

export default App;
