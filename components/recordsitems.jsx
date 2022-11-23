import styles from "./recordsitem.module.css";

const recordstable = () => {
  return (
    <div className={styles.container}>
      <div className="col-2"></div>
      <div className="col-8" >
      <p> Please Select to view a Records</p>
      <table className={styles.TableContent} >
      <thead class="thead_1">
        <tr>
          <th className={styles.TableContent1}>Records</th>

    
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.TableContent2}></td>
          
       
         

        </tr>
       
      </tbody>
    </table>
      </div>
      <div className="col-2"></div>
    </div>
  );
};

export default recordstable;
