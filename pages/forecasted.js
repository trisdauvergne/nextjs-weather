import styles from '../styles/Forecasted.module.css'

const Forecasted = ({ forecastedData }) => {
  console.log('data in forecasted', forecastedData);
  
  return (
    <section className={styles.forecasted}>
      <h1 className={styles.forecasted__heading}>3 day forecast</h1>
      <div className={styles.forecasted__forecasts}>
      {forecastedData.forecast.forecastday.map((day, i) =>
        <div className={styles.forecasted__forecast} key={i}>
          <p className={styles.forecasted__date}>Forecasted weather on {day.date}</p>
          <p className={styles.forecasted__subheading}>{day.day.condition.text}</p>
          <p>Chance of rain: {day.day.daily_chance_of_rain}%</p>
          <p>Forecasted temperature: {day.day.avgtemp_c}°c</p>
          <p>Forecasted windspeed: {day.day.maxwind_kph}km/h</p>
          <p>UV index: {day.day.uv}</p>
        </div>)}
      </div>
    </section>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=stockholm&days=3", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
      "x-rapidapi-host": `${process.env.NEXT_PUBLIC_API_HOST}`
    }
  });
  const forecastedData = await res.json();

  return {
    props: {
      forecastedData
    }
  };
};
 
export default Forecasted;