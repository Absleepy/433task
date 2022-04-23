import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../services/Posts/Posts.service';
import Posts from '../../Components/PagesComponents/Home/Posts/Posts';
import { getPostsAction, loadingAction } from '../../Redux/Actions/Posts/Posts.actions';
import AddNewPost from '../../Components/PagesComponents/AddPost/AddPost';
const Home = () => {

    const isloggedIn = JSON.parse(localStorage.getItem('isAuth'));
    const [isAuth, setIsAuth] = useState(isloggedIn);
    const [showForm, setShowForm] = useState(false);


    const handleLogout = () => {
        localStorage.setItem('isAuth', false);
        setIsAuth(false);
    };

    const fetchData = async () => {
        dispatch(loadingAction())
        const res = await getPosts();
        dispatch(getPostsAction(res?.slice(0, 10)))

    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuth) {
            fetchData();
        }
        if (!isAuth) {
            navigate('/login');
        }
    }, [isAuth])
    const url = window.location.search;

    useEffect(() => {
        setShowForm(url.includes('?'))
    }, [url])

    return (
        <>
            <button onClick={handleLogout} className="logoutBtn">Log out</button>
            {showForm ? <AddNewPost /> :
                <Posts />}
        </>
    );
};

export default Home;
