import styles from "./recordsitem.module.css";
import Link from "next/link"

const recordstable = () => {
  return (
    <div className={styles.container}>
      <div className={styles.records}>
          <p> Please Select to view a Records</p>
          
      </div>
      <div className={styles.app}>
            <table>
              <tbody>
                <tr>
                  <th>Date and Time</th>
                  <th>Actions</th>
                </tr>
                <tr>
                  <td>Nov 30, 2022 - 12:00pm</td>
                  <td><button>Details</button></td>
                </tr>
                <tr>
                  <td>Nov 30, 2022 - 12:00pm</td>
                  <td><button>Details</button></td>
                </tr>
                <tr>
                  <td>Nov 30, 2022 - 12:00pm</td>
                  <td><button>Details</button></td>
                </tr>
              </tbody>

            </table>
          </div>
    </div>
  );
};

export default recordstable;
