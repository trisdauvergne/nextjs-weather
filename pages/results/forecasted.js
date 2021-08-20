const Forecasted = ({ forecastedData }) => {
  console.log('data in forecasted', forecastedData);
  
  return (
    <div>
      <h1>Forecasted weather</h1>
      {forecastedData.forecast.forecastday.map((day, i) =>
      <div key={i}>
        <p>Forecasted weather in {forecastedData.location.name} on {day.date} is {day.day.condition.text}</p>
        <p>There is a {day.day.daily_chance_of_rain}% chance of rain</p>
        <p>The forecasted temperature is {day.day.avgtemp_c} deg c</p>
        <p>The forecasted windspeed is {day.day.maxwind_kph} kph</p>
        <p>UV {day.day.uv}</p>
      </div>)}
    </div>
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
  }
}
 
export default Forecasted;