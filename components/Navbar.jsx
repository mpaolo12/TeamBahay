import Button from "./Button";
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
      <div className={styles.wait}>
      <h2>Dashboard</h2>
      </div>
      <div className={styles.navbarActions}>
        <Button variant="secondary">About</Button>
        <Button variant="secondary">Contact</Button>
      </div>
    </div>
  );
};

export default Navbar;
