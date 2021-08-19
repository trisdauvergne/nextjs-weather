import WeatherLayout from '../../components/WeatherLayout'

const CurrentWeather = ({ currentData }) => {
  console.log('data in currentWeather', currentData);
  return (
  <div>
    <WeatherLayout>
    <h1>Current weather in Stocholm</h1>
    <p>Last updated at {currentData.current.last_updated}</p>
    <p>Weather in {currentData.location.name} is {currentData.current.condition.text}</p>
    <p>Currently {currentData.current.temp_c} deg c</p>
    <p>Wind speed is {currentData.current.wind_kph} kph</p>
    <p>Wind direction is {currentData.current.wind_dir}</p>
    <p>Humidity is {currentData.current.humidity}%</p>
    </WeatherLayout>
  </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=stockholm", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
      "x-rapidapi-host": `${process.env.NEXT_PUBLIC_API_HOST}`
    }
  });
  const currentData = await res.json();

  return {
    props: {
      currentData
    }
  }
}

export default CurrentWeather;
