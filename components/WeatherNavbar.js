import Link from 'next/link'

const WeatherNavbar = () => {
  return (
    <div>
        <Link href="/results/current"><a>Today&apos;s weather</a></Link>
        <Link href="/results/forecasted"><a>14 day weather forecast</a></Link>
        <Link href="/results/historic"><a>Historic weather</a></Link>
      </div>
  );
}
 
export default WeatherNavbar;