import React, { useState } from 'react'
import Form from '../../Components/PagesComponents/Home/Form/Form';
import Posts from '../../Components/PagesComponents/Home/Posts/Posts';

const Home = () => {
    const [isAuth, setIsAuth] = useState(true);
    const [data, setData] = useState({
        name: "",
        email: "",
        dob: "",
        gender: 'Male',

    });
    const handleChange = e => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }


    return (
        <>
            {
                isAuth ? <Form handleChange={handleChange} data={data} /> : <Posts />
            }

        </>
    )
}

export default Home