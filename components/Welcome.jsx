import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <p>Welcome to the </p>
      <p>dashboard Alexa!</p>
    <div className={styles.logo1}>
      <img src="/images/amico.png" />
    </div>  
    <div className={styles.logo2}>
      <img src="/images/rectangle 1.png" />
    </div>
    </div>
  );
};

export default Welcome;