import React from 'react';

function Person() {
    const url = "https://randomuser.me/api/portraits/thumb/men/65.jpg";
    return (
        <div className="person">
            <h1>I am a person</h1>
            <img src={url} />
            <article>
                <h4>name</h4>
                <h4>job</h4>
            </article>
        </div>
    )
}

export default Person
