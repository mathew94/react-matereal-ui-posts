import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Comment from '../Comment/Comment';


const PostDetail = () => {
    const {pId} = useParams();
    const [post, setPost] = useState({});
    const {title, body,userId, id} = post;
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${pId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${pId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])

    return (
        <div style = {{backgroundColor: "lightGray", padding: "15px", margin: '10px', borderRadius: '10px'}}>
            <div>
                <h1 style = {{textAlign:'center'}}>Post Detail</h1>
                <h5>User Id : {userId}</h5>
                <h5>Post Id : {id}</h5>
                <h3>Title : {title}</h3>
                <p>Description : {body}</p>
            </div>
            <div>
                <h2 style = {{textAlign:'center'}}>Comments</h2>
                {
                    comments.map(cmt => <Comment comment = {cmt}></Comment>)
                }
            </div>
            
        </div>
    );
};

export default PostDetail;