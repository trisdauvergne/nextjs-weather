import styles from '../styles/Current.module.css'

const CurrentWeather = ({ currentData }) => {
  console.log('data in currentWeather', currentData);

  return (
    <section className={styles.test}>
      <h1>Current weather in Stocholm</h1>
      <p>Last updated: {currentData.current.last_updated}</p>
      <p>Current {currentData.location.name} weather: {currentData.current.condition.text}</p>
      <p>Current temp: {currentData.current.temp_c} deg c</p>
      <p>Wind speed: {currentData.current.wind_kph} kph</p>
      <p>Wind direction: {currentData.current.wind_dir}</p>
      <p>Humidity: {currentData.current.humidity}%</p>
      <p>UV index: {currentData.current.uv}</p>
    </section>
  );
};

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
  };
};

export default CurrentWeather;
