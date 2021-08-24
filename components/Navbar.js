import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {

  return ( 
    <nav className={styles.navbar}>
      <Link href="/"><a className={styles.navbar__logo}>Weather Vain*</a></Link>
      <div className={styles.navbar__anchors}>
        <Link href="/current"><a className={styles.navbar__anchor}>Weather today</a></Link>
        <Link href="/forecasted"><a className={styles.navbar__anchor}>3 day forecast</a></Link>
      </div>
    </nav>
   );
}
 
export default Navbar;
