import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from '../../Components/PagesComponents/Home/Form/Form';
import Posts from '../../Components/PagesComponents/Home/Posts/Posts';

const Home = () => {
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    dob: false,
  });

  const [data, setData] = useState({
    name: '',
    email: '',
    dob: '',
    gender: 'Male',
  });

  const [isAuth, setIsAuth] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: false,
    });
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };
  const checkValidation = () => {
    const validName = /^[A-Za-z ]+$/.test(data.name);
    const validEmail = validateEmail(data.email);
    const validDOB =
      new Date().getFullYear() >= new Date(data.dob).getFullYear();
    switch (true) {
      case !validName:
        setErrors({
          ...errors,
          name: true,
        });
        return false;
      case !validEmail:
        setErrors({
          ...errors,
          email: true,
        });
        return false;
      case !validDOB:
        setErrors({
          ...errors,
          dob: true,
        });
        return false;
      default:
        return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = checkValidation();
    if (isValid) {
      toast.success('Success Notification !', {
        position: toast.POSITION.TOP_CENTER,
      });
      setIsAuth(localStorage.setItem('isAuth', true));
      setErrors({
        name: false,
        email: false,
        dob: false,
      });
    }
    return false;
  };

  const handleLogout = () => {
    localStorage.setItem('isAuth', true);
  };
  const authorisation = localStorage.getItem('isAuth');
  useEffect(() => {
    if (authorisation) {
      setIsAuth(localStorage.setItem('isAuth', false));
    }
  }, [authorisation]);

  return (
    <>
      <ToastContainer />
      <button onClick={handleLogout}>Log out</button>
      {console.log(isAuth)}
      {isAuth ? (
        <Posts />
      ) : (
        <Form
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
          data={data}
        />
      )}
    </>
  );
};

export default Home;
