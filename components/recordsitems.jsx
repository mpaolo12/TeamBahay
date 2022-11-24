import styles from "./recordsitem.module.css";

const recordstable = () => {
  return (
    <div className={styles.container}>
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
  );
};

export default recordstable;
