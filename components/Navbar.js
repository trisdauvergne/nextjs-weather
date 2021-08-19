import Link from 'next/link'

const Navbar = () => {

  return ( 
    <div>
      <h1>NextJS Weather</h1>
      <Link href="/"><a>Homepage</a></Link>
      <Link href="/results/"><a>Show the weather</a></Link>
      <Link href="https://www.weatherapi.com/"><a target="_blank">About the API</a></Link>
    </div>
   );
}
 
export default Navbar;
