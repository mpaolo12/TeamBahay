import styles from "./Passcodeforms.module.css";
import { useForm } from "react-hook-form";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image'

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    toast.success('Form submitted!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  

   
  return (
    <div className={styles.container}>
        <div className={styles.kahon}>
          <form className={styles.Changepasscode} onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="oldpin">Old Pin:  </label><br></br>
              <input id="oldpin" {...register("oldpin", { required: true, maxLength: 25 })}></input><br></br><br></br>
              <label htmlFor="newpin">New Pin:  </label><br></br>
              <input id="newpin" {...register("newpin", { required: true, maxLength: 25 })}></input><br></br><br></br>
              <label htmlFor="rnewpin">Re-Type New Pin:  </label><br></br>
              <input id="rnewpin" {...register("rnewpin", { required: true, maxLength: 25 })}></input><br></br><br></br><br></br>
              <button type="submit" id={styles.submitbtn}> Confirm</button>
              <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              />
          </form>
        </div>
        <div className={styles.Changepasscodepic}>
            <Image src="/images/passcodeicon.png" alt="" width='600' height='550'/>
        </div>
    </div>
  );
}


