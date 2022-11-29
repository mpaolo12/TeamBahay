import styles from "./details.module.css";

const Detailrecords = () => {
  return (
    
    <div className={styles.container}>
      <div className={styles.kahon} >
       
          <div className={styles.detail}>
          <p>Details:</p>
            <h2>Date and Time:</h2>
            <input type="hidden" id={styles.DaT}></input><br></br>
            <h2>Status:</h2>
            <input type="hidden" id={styles.sts}></input>
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
