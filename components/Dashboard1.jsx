import styles from "./Dashboard1.module.css";
import React from "react";
import Link from "next/link"
import Image from 'next/image'

const Dashboard1 = () => {
  return (
      <div className={styles.container}>
      <div className={styles.message}>
        <h4><span> Welcome </span>to dashboard.</h4> 
          <Link href="/Passcode"> <span><button  type="submit" id={styles.submitbtn}>Change Passcode</button> </span></Link>
          <Link href="/Record"><button  type="submit" id={styles.submitbtn2}>Security Record</button></Link>
      </div>
      <div className={styles.image}>
        <Image src="/images/amico.png" alt="" width='400' height='400'/>
      </div>
    </div>
  ) ;
};

export default Dashboard1;