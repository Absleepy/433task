import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getPosts } from '../../services/Posts/Posts.service';
import Form from '../../Components/PagesComponents/Home/Form/Form';
import Posts from '../../Components/PagesComponents/Home/Posts/Posts';
import { getPostsAction } from '../../Redux/Actions/Posts/Posts.actions';
import { useDispatch, useSelector } from 'react-redux';

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
    const isloggedIn = JSON.parse(localStorage.getItem('isAuth'));
    const [isAuth, setIsAuth] = useState(isloggedIn);

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
            new Date().getFullYear() - 10 > new Date(data.dob).getFullYear();
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

            localStorage.setItem('isAuth', true)
            setIsAuth(!!localStorage.getItem('isAuth'));
            setErrors({
                name: false,
                email: false,
                dob: false,
            });
        }
        return false;
    };

    const handleLogout = () => {
        localStorage.setItem('isAuth', false);
        setIsAuth(false);
    };

    const fetchData = async () => {
        const res = await getPosts();
        dispatch(getPostsAction(res))

    }

    const dispatch = useDispatch();
    useEffect(() => { 
        if (isAuth) {
            fetchData();
        }


    }, [isAuth])



    return (
        <>
            <ToastContainer />
            <button onClick={handleLogout}>Log out</button>
            {Boolean(isAuth) ? (
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
