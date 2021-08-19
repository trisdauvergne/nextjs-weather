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
