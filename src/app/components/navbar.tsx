import Link from "next/link";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <hr />
        <br />
        <Link href="/about">About Page</Link>
        <br />
        <Link href="/about/overview">Overview Page</Link>
        <br />
        <Link href="/about/overview/jobs">Jobs Page</Link>
        <br />
        <Link href="/contact">Contact Us</Link>
        <br />
        <Link href="/">Home</Link>
      </nav>
    </div>
  );
}
