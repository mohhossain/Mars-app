import logo from "./logo.svg";
import "./App.css";
import Curiosity from "./Curiosity";
import Perseverance from "./Perseverance";
import { useState, useEffect } from "react";
import LatestImage from "./LatestImage";
import NewImageForm from "./NewImageForm";

function App() {
  const rovers = ["Curiosity", "Perseverance"];
  const rover_image =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Mars_2020_Rover_-_Artist%27s_Concept.png/1200px-Mars_2020_Rover_-_Artist%27s_Concept.png";
  const [latestImages, setLatestImages] = useState([]);

  const [loading, setLoading] = useState(false);
  // clickCount = 0
  // setClickCount(100)
  const api_key = "1vqM375yXHsdDE70mKqxWcgrOJMjK3BavOpJm4Es";
  const [rover, setRover] = useState("curiosity");

  const onRoverChange = (rover) => {
    setRover(rover);
  };
  console.log(rover);

  console.log(process.env);

  useEffect(() => {
    setLoading(true);
    console.log("it is fetching!!");
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/latest_photos?sol=1000&api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLatestImages(data.latest_photos);
        setLoading(false);
      });
  }, [rover]);

  // [] => only load once when the app loads

  return (
    <div className="App">
      <div className="rover-container">
        <Curiosity
          onRoverChange={onRoverChange}
          roverImage={rover_image}
          rovers={rovers}
        ></Curiosity>
        <Perseverance
          onRoverChange={onRoverChange}
          roverImage={rover_image}
          rovers={rovers}
        ></Perseverance>
      </div>
      <NewImageForm></NewImageForm>

      <div className="image-container">
        {loading ? (
          <h1>Loading....</h1>
        ) : (
          latestImages.map((image) => {
            return <LatestImage key={image.id} image={image.img_src} />;
          })
        )}
      </div>
    </div>
  );
}

export default App;
