
import styles from "./Navbar2.module.css";


const Navbar2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/images/avatar.png" />
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
