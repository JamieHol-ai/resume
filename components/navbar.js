// components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css'; // import CSS module

export default function Navbar({name}) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.name}>{name}</div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}