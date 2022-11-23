import styles from "./Navpasscode.module.css";

const PasscodeEdit = () => {
  return (
    <div className={styles.container}>
        <div className={styles.kahon}>
          <form className={styles.Changepasscode}>
              <label htmlFor="oldpin">Old Pin:    </label>
              <input id="oldpin"></input><br></br><br></br><br></br>
              <label htmlFor="newpin">New Pin:    </label>
              <input id="newpin"></input><br></br><br></br><br></br>
              <label htmlFor="rnewpin">Re-Type New Pin:    </label>
              <input id="rnewpin"></input><br></br><br></br><br></br>
              <button  type="submit" id={styles.submitbtn}> Confirm</button>
          </form>
        </div>
        <div className={styles.Changepasscodepic}>
            <img src="/images/passcodeicon.png" />
        </div>
    </div>
  );
};

export default PasscodeEdit;
