
import styles from "./Navbar1.module.css";

const Navbar1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/images/avatar.png" />
      </div>
      <div className={styles.lol}>
        <h2>Alexa's House</h2>
      </div>
    </div>
  );
};

export default Navbar1;
