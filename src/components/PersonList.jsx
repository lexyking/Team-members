import React from 'react';
import Person from './Person'

function PersonList() {
    const team = [
        {
            img: 22, name: 'john', job: 'developer', quote: '\"Better life is so simple\"'
        },
        {
            img: 12, name: 'Lewis', job: 'Analyst', quote: '\"I believe i can fly\"'
        },
        {
            img: 42, name: 'Ronald', job: 'Data Scientist'
        }
    ]
    return (
        <section class="container">
            {team.map((teamMember) => {
                return <Person teamMember={teamMember} />
            })}
        </section>
    )
}


export default PersonList
