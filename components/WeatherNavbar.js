import Link from 'next/link'

const WeatherNavbar = () => {
  return (
    <div>
        <Link href="/results/current"><a>Today&apos;s weather</a></Link>
        <Link href="/results/forecasted"><a>3 day weather forecast</a></Link>
      </div>
  );
}
 
export default WeatherNavbar;