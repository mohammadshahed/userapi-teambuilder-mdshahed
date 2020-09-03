import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {

    const { name, email, id} = props.friend;
    const friendStyle = { 
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }

    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>email: {email}</p>
            <Link to={`/friend/${id}`}>show detail of {id}</Link>
            <br/>
            <button onClick={() => handleClick(id)}>click me</button>
        </div>
    );
};

export default Friend;