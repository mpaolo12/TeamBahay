
import styles from "./Navbar1.module.css";
import Link from "next/link"

const Navbar1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/images/avatar.png" />
      </div>
      <div className={styles.lol}>
        <h2>Alexa's House</h2>
      </div>
      <div className={styles.button}>
        <Link href="/Passcode"><span  type="submit" id={styles.submitbtn2}>Home</span></Link>
        <Link href="/Passcode"><span  type="submit" id={styles.submitbtn2}> About</span></Link>
        <Link href="/Passcode"><span  type="submit" id={styles.submitbtn2}> Contact Us</span></Link>
      </div>
    </div>
  );
};

export default Navbar1;
