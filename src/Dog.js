import React from 'react';

const Dog = (props) => {
    return (
        <>
            <h1>{props.dogName}</h1>
            <div><img src={props.src} /></div>
            <ul>
                <li>Age: {props.age}</li>
                <li>Facts: {props.facts}</li>
            </ul>
        </>
    )
}

export default Dog;