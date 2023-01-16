import styles from "./Welcome.module.css";
import React from "react";
import Link from "next/link"
import Image from 'next/image'

const Welcome = () => {
  return (
      <div className={styles.container}>
      <div className={styles.message}>
        <h4><span> Monitoring </span>Security Lock System</h4> 
          <Link href="/Signin"> <span><button  type="submit" id={styles.submitbtn}>SIGN-IN</button> </span></Link>
          <Link href="/Signup"><button  type="submit" id={styles.submitbtn2}>SIGN-UP</button></Link>
      </div>
      <div className={styles.image}>
        <Image src="/images/amico.png" alt="" width='400' height='400'/>
      </div>
    </div>
  ) ;
};

export default Welcome;