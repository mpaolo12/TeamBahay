import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <h4><span> Welcome </span>to the dashboard Alexa!</h4> 
        <span><button  type="submit" id={styles.submitbtn}>Change Passcode</button> </span>
        <button  type="submit" id={styles.submitbtn2}>Security Record</button>
      </div>
      <div className={styles.image}>
        <img src="/images/amico.png" />
      </div>
    </div>
  ) ;
};

export default Welcome;
