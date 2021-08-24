import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return ( 
    <footer>
      <Link href="https://www.weatherapi.com/"><a className={styles.footer} target="_blank">To the API</a></Link>
    </footer>
   );
}
 
export default Footer;