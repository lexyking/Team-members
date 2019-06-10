import React from 'react';

function Person(props) {
    const { img, name, job, quote } = props.teamMember;
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
    return (
        <div className="person">
            <h1>Hi I'm {name}</h1>
            <img src={url} />
            <article>
                <h4>{job}</h4>
                <h4 className="quote">{quote}</h4>
            </article>
        </div>
    )
}

export default Person
