import React from 'react'
import styles from './Form.module.css';
const Form = ({ data, handleChange }) => {
  return (
    <form className={styles.container}>
      <h1 className={styles.title}>Personal Info</h1>
      <div className={styles.userImg}>
        <label htmlFor="user"><img width="100%" src={data?.userImg ?? "./assets/images/user.svg"} alt="user" /></label>
        <input onChange={handleChange} type="file" name="user" id="user" />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="name">NAME</label>
        <input name="name" onChange={handleChange} type="text" id="name" value={data?.name ?? ""} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="email">EMAIL</label>
        <input name="email" onChange={handleChange} type="email" id="email" value={data?.email ?? ""} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="dob">DATE OF BIRTH</label>
        <input name="dob" onChange={handleChange} type="date" id="dob" value={data?.dob ?? ""} />
      </div>
      <div>
        <h4>GENDER</h4>
        <div className={styles.genderContainer}>
          <div>
            <label htmlFor="male">Male</label>
            <input onChange={handleChange} type="radio" name='gender' id="male" />
          </div>
          <div>
            <label htmlFor="female">Female</label>
            <input onChange={handleChange} type="radio" name='gender' id="female" />
          </div>
        </div>
      </div>
      <button type='submit' className={styles.submitBtn}>Submit</button>
    </form>
  )
}

export default Form