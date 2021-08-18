import Axios from 'axios'

const ResultsPage = () => {

  const getWeather = (e) => {
    e.preventDefault();
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: {q: e.target.location.value},
      headers: {
        'x-rapidapi-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
        'x-rapidapi-host': `${process.env.NEXT_PUBLIC_API_HOST}`
      }
    }

    Axios.request(options)
    .then((response) => {
    console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
    e.target.location.value = '';
  }

  return ( 
    <div>
      <h1>Main results page</h1>
      <form onSubmit={getWeather}>
        <label htmlFor="location">Location</label>
        <input id="location" name="location" type="text" required />
        <button type="submit">Get the weather!</button>
      </form>
    </div>
   );
}
 
export default ResultsPage;

// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://weatherapi-com.p.rapidapi.com/current.json',
//   params: {q: 'stockholm'},
//   headers: {
//     'x-rapidapi-key': 'b297513b21msh55c6d341915a703p1c4837jsna1b2d91c7b69',
//     'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });