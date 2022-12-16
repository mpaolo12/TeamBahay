import styles from "./Contactus.module.css";
import {FaGithub, FaFacebook} from 'react-icons/fa';
import Image from 'next/image'


const Contactus = () => {
  return (
    <div className={styles.container} id={'contactus'}> 
        <div className={styles.contactimg}>
          <h1>CONTACT US</h1>
          <Image src="/images/contactus.png" alt="" width='400' height='300'/>
        </div> 
        <div className={styles.contactdetails}>
              <h2>Wendel Alvero</h2>
              <h2>Marco Paolo Asuncion</h2>
              <h2>Hazel Ann Mae Barcibal</h2>
              <h2>Emie Laide Ligutan</h2>
              <h2>Reymie Madera</h2>

        </div> 
        <div className={styles.logolink}>
              <a href="https://github.com/WendelAlvero"><FaGithub size={'35px'} color={'#FFFFFF'}/></a>
              <a href="https://www.facebook.com/amirahalodia"><FaFacebook size={'35px'} color={'#FCE300'}/></a>

              <a href="https://github.com/mpaolo12" className={styles.logo2}><FaGithub size={'35px'} color={'#FFFFFF'}/></a>
              <a href="https://www.facebook.com/marcopaolo.s.asuncion" className={styles.logo3}><FaFacebook size={'35px'} color={'#FCE300'}/></a>

              <a href="https://github.com/hazelbarcibal" className={styles.logo4}><FaGithub size={'35px'} color={'#FFFFFF'}/></a>
              <a href="https://www.facebook.com/hzlnnm.barci" className={styles.logo3}><FaFacebook size={'35px'} color={'#FCE300'}/></a>

              <a href="https://github.com/emielaideligutan" className={styles.logo5}><FaGithub size={'35px'} color={'#FFFFFF'}/></a>
              <a href="https://www.facebook.com/emie.ligutan" className={styles.logo3}><FaFacebook size={'35px'} color={'#FCE300'}/></a>
        
              <a href="https://github.com/reymie" className={styles.logo6}><FaGithub size={'35px'} color={'#FFFFFF'}/></a>
              <a href="https://www.facebook.com/reymie.madera.16" className={styles.logo3}><FaFacebook size={'35px'} color={'#FCE300'}/></a>
        </div> 

        <div className={styles.contact}>
          <Image src="" alt="" width='0' height='0'/>       
          <p> © Teambahay</p>
        </div> 


    </div>
  ) ;
};

export default Contactus;
