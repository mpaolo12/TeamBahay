import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container} id={'about'}>    
      <div className={styles.kahon}>
        <h1>ABOUT</h1>
        <p>Monitoring security lock system is developed  by Team Bahay of BET-COET-NS-4B in the year of 2022.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend nisl id sapien porttitor, 
              nec efficitur ante viverra. Quisque sagittis blandit velit. Integer ac purus sit amet massa posuere elementum.
               Morbi iaculis orci sed eros vestibulum rhoncus. Cras a tortor non urna mollis sollicitudin sed ac velit. 
               Integer in turpis in est tincidunt scelerisque. Vivamus eu dolor mauris. Suspendisse sit amet iaculis mauris. 
               Suspendisse blandit enim nec orci congue mattis. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada nibh eu lorem pellentesque, sed ullamcorper justo volutpat.</p>
      </div>     
    </div>
  ) ;
};

export default About;
