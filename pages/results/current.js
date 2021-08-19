import WeatherLayout from '../../components/WeatherLayout'

const CurrentWeather = ({ data }) => {
  console.log('data in currentWeather', data);
  return (
  <div>
    <WeatherLayout>
    <h1>Current weather in Stocholm</h1>
    <p>Last updated at {data.current.last_updated}</p>
    <p>Weather in {data.location.name} is {data.current.condition.text}</p>
    <p>Currently {data.current.temp_c} deg c / {data.current.temp_f} deg f</p>
    <p>Wind speed is {data.current.wind_kph} kph / {data.current.wind_mph} mph</p>
    <p>Wind direction is {data.current.wind_dir}</p>
    <p>Humidity is {data.current.humidity}%</p>
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
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}

export default CurrentWeather;
