import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {

  return ( 
    <nav className={styles.navbar}>
      <Link href="/"><a className={styles.navbar__logo}>Weather Vain*</a></Link>
      <div className={styles.navbar__anchors}>
        {/* <Link href="/"><a>Homepage</a></Link> */}
        <Link href="/current"><a>Weather today</a></Link>
        <Link href="/forecasted"><a>3 day forecast</a></Link>
      </div>
    </nav>
   );
}
 
export default Navbar;
