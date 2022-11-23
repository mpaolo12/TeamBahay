import styles from "./details.module.css";

const Detailrecords = () => {
  return (
    
    <div className={styles.container}>
      
      <div className={styles.kahon} >
        <p>Details:</p>
        <div className={styles.container1}>
        <div className="col-6">
            <p>Date and Time:</p>
            <p id={styles.DaT}>November-23-2022 1:00PM</p><br></br>
            <p>Status:</p>
            <p id={styles.sts}>Invalid Attempt</p>
        </div>
        <div className="col-6">
           <p>Capture Image:</p>
           <img src="/images/captured.png" />
        </div>
        </div>
        
      </div>
    
     </div>

      
      
      
  );
};

export default Detailrecords;
