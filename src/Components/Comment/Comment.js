import React from 'react';

const Comment = (props) => {
    const {name, email, body} = props.comment;
    return (
        <div style = {{backgroundColor : 'darkgray', padding: '5px', margin: '10px', borderRadius: '10px'}}>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Comment : {body}</p>
        </div>
    );
};

export default Comment;