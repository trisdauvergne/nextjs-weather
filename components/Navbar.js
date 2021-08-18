import Link from 'next/link'

const Navbar = () => {

  return ( 
    <div>
      <h1>NextJS Weather</h1>
      <Link href="/"><a>Search</a></Link>
      <Link href="/results/"><a>Results page</a></Link>
      <Link href="https://www.weatherapi.com/"><a target="_blank">To the API</a></Link>
    </div>
   );
}
 
export default Navbar;

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
