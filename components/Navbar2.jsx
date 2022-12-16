
import styles from "./Navbar2.module.css";
import Image from 'next/image'


const Navbar2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/images/avatar.png" alt="" width='50' height='50'/>
      </div>
      <div className={styles.lol}>
      <h2>Alexa's House</h2>
      </div>
      <div className={styles.lol2}>
      <h2>Change Passcode</h2>
      </div>
    </div>
  );
};

export default Navbar2;
