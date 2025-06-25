
import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import "./App.css"; // Make sure this includes the CSS we discussed earlier

function App() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    humidity: 70,
    temp: 30,
    tempMin: 25,
    tempMax: 35,
    weather: "Sunny",
    feelsLike: 32,
  });

  return (
    <>
      {/* Background video */}
      <video autoPlay muted loop className="background-video">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main content area */}
      <div className="content">
        <h2>Weather App by Bhoomi</h2>
        <SearchBox updateInfo={setWeatherInfo} />
        <InfoBox info={weatherInfo} />
      </div>
    </>
  );
}

export default App;
