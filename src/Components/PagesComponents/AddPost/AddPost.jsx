import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../../../Redux/Actions/Posts/Posts.actions';
import styles from './AddPost.module.css';
const AddPost = () => {
    const [values, setValues] = useState({
        title: "",
        description: ""
    })
    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            [name]: value
        })
    }
    const { posts } = useSelector(state => state.posts);
    console.log({ posts });
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        const data = [{ title: values.title, description: values.description }, ...posts];
        dispatch(getPostsAction())
    };
    return (
        <form className={styles.container}>
            <h1 className={styles.title}>Add Post</h1>

            <div className={styles.inputContainer}>
                <label htmlFor='title'>Title </label>
                <input
                    name='title'
                    placeholder='Enter Title'
                    onChange={handleChange}
                    type='text'
                    id='title'
                    value={values?.title}
                />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor='description'>Description</label>
                <textarea cols="30" rows="7"
                    name='description'
                    placeholder='Enter Description'
                    onChange={handleChange}
                    type='text'
                    id='description'
                    value={values?.description}
                />
            </div>

            <button type='submit' onClick={handleSubmit} className={styles.submitBtn}>
                Submit
            </button>
        </form>
    )
}

export default AddPost