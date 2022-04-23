import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from '../../Components/PagesComponents/Home/Form/Form'

const Login = () => {
    const isloggedIn = JSON.parse(localStorage.getItem('isAuth'));

    const [isAuth, setIsAuth] = useState(isloggedIn);

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

    const navigate = useNavigate();
    useEffect(() => {
        if (isAuth) {
            navigate('/')
        }

    }, [isAuth])
    return (
        <div>
            <Form
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                errors={errors}
                data={data}
            />
        </div>
    )
}

export default Login