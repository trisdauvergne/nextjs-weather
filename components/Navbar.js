import Link from 'next/link'

const Navbar = () => {

  return ( 
    <nav>
      <h1>NextJS Weather</h1>
      <Link href="/"><a>Homepage</a></Link>
      <Link href="/results/current"><a>Weather today</a></Link>
      <Link href="/results/forecasted"><a>3 day forecast</a></Link>
    </nav>
   );
}
 
export default Navbar;
