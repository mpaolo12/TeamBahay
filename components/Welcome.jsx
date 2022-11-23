import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <p>Welcome to the</p>
        <p>dashboard Alexa!</p>
        <button  type="submit" id={styles.submitbtn}>Change Passcode</button>
        <button  type="submit" id={styles.submitbtn2}>Security Record</button>
      </div>
      <div className={styles.image}>
        <img src="/images/amico.png" />
      </div>
    </div>
  ) ;
};

export default Welcome;
