import React from 'react';
import styles from './Form.module.css';
const Form = ({ data, handleChange, handleSubmit, errors }) => {
  return (
    <form className={styles.container}>
      <h1 className={styles.title}>Personal Info</h1>
      <div className={styles.userImg}>
        <label htmlFor='user'>
          <img
            width='100%'
            src={data?.userImg ?? './assets/images/user.svg'}
            alt='user'
          />
        </label>
        <input onChange={handleChange} type='file' name='user' id='user' />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='name'>NAME {errors?.name && <span className={styles.error}>Please enter a valid name</span>}</label>
        <input
          name='name'
          placeholder='Enter Your Name'
          onChange={handleChange}
          type='text'
          id='name'
          className={errors?.name && styles.error}
          value={data?.name ?? ''}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='email'>EMAIL {errors?.email && <span className={styles.error}>Please enter a valid email</span>}</label>
        <input
          name='email'
          placeholder='Enter Your Email'
          onChange={handleChange}
          type='email'
          className={errors?.email && styles.error}
          id='email'
          value={data?.email ?? ''}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='dob'>DATE OF BIRTH {errors?.dob && <span className={styles.error}>Please enter a valid Date of birth</span>}</label>
        <input
          name='dob'
          onChange={handleChange}
          type='date'
          id='dob'
          className={errors?.dob && styles.error}
          value={data?.dob ?? ''}
        />
      </div>
      <div>
        <h4>GENDER</h4>
        <div className={styles.genderContainer}>
          <div>
            <label htmlFor='male'>Male</label>
            <input
              onChange={handleChange}
              type='radio'
              name='gender'
              defaultChecked
              id='male'
            />
          </div>
          <div>
            <label htmlFor='female'>Female</label>
            <input
              onChange={handleChange}
              type='radio'
              name='gender'
              id='female'
            />
          </div>
        </div>
      </div>
      <button type='submit' onClick={handleSubmit} className={styles.submitBtn}>
        Submit
      </button>
    </form>
  );
};

export default Form;
