import Link from 'next/link';
import styles from '../styles/navigation.module.css';

export default function Navigation() {
  return (
    <div className={styles.nav}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about-us">About Us</Link>
      </li>
    </div>
  );
}
