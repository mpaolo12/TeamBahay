import Welcome from "../components/Welcome";
import Navbar1 from "../components/Navbar1";
import About from "../components/About";
import Contactus from "../components/Contactus";

  
const Dashboard = () => {
  return (
    <div>
      <Navbar1 />
      <Welcome />
      <About />
      <Contactus />
    </div>
  );
};
 

export default Dashboard;
