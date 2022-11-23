
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/images/avatar.png" />
      </div>
      <div className={styles.lol}>
      <h2>Alexa's House</h2>
      </div>
      <button  type="submit" id={styles.submitbtn}> Back</button>
    </div>
  );
};

export default Navbar;
