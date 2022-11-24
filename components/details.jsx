import styles from "./details.module.css";

const Detailrecords = () => {
  return (
    
    <div className={styles.container}>
      <div className={styles.kahon} >
       
          <div className={styles.detail}>
          <p>Details:</p>
            <h2>Date and Time:</h2>
            <h3 id={styles.DaT}>November-23-2022 1:00PM</h3><br></br>
            <h2>Status:</h2>
            <h1 id={styles.sts}>Invalid Attempt</h1>
        </div>
 
        <div className={styles.image}>
           <h2>Capture Image</h2>
           <img src="/images/captured.png" />
        </div>

      </div>

    
     </div>

      
      
      
  );
};

export default Detailrecords;
