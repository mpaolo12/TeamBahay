import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container} id={'about'}>    
      <div className={styles.kahon}>
        <h1>ABOUT</h1>
        <p>Monitoring security lock system is developed  by Team Bahay of BET-COET-NS-4B in the year of 2022.</p>
            <p>This system will be installed in modern houses that needs high-quality security system. This is a web-based system that tracks the activity of your doorlock. The team, integrated the ussage of RFID and pincode in the doorlock. We also used a camera that auto-captures the person infront of your door in every attempt to unlock the door. These photos will be saved in the database including the other deatails like time and date. This can be used by authorities and house owner as an evidence incase of incidents.
            </p>
      </div>     
    </div>
  ) ;
};

export default About;
