import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Posts.module.css';

const Posts = () => {
    const { posts, loading } = useSelector(state => state.posts);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('?add-new-post')
    }
    console.log(posts);
    return (
        <div className={styles.container}>
            <div className={styles.pageTitle}>HOME</div>
            {loading ? <h1>Loading...</h1> : posts?.map(post => (
                <div className={styles.post} key={post?.id}>
                    <h4 className={styles.postTitle}>{post?.title}</h4>
                    <div>{post?.body}</div>
                </div>
            ))}
            <button type='button' onClick={handleClick} className={styles.addButton}>Add New Post</button>

        </div>
    )
}

export default Posts