import Navbar from "../components/Navbar";
import Recordstable from "../components/recordsitems";
import Lower from "../components/Lower";

const records = () => {
  return (
    <div>
      <Navbar />
      <Recordstable/>
      <Lower/>
    </div>
  );
};

export default records;
