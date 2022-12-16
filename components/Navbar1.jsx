
import styles from "./Navbar1.module.css";
import React from "react";
import Link from "next/link"
import Image from 'next/image'


const Navbar1 = () => {
  return (
      <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/images/avatar.png" alt="" width='80' height='80'/>
      </div>
      <div className={styles.lol}>
        <h2>Alexa's House</h2>
      </div>
      <div className={styles.navbarActions}>
        <Link href="#"><span  type="submit" className={styles.submitbtn}>Home</span></Link>
        <Link href="#about"><span  type="submit" className={styles.submitbtn1}> About</span></Link>
        <Link href="#contactus"><span  type="submit" className={styles.submitbtn2}> Contact Us</span></Link>
      </div>
    </div>


  );
};

export default Navbar1;
