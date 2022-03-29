import React from 'react';

const Actors = ({ items }) => {
    console.log(items);
    const list = items.map((user) => { return <img key={user.id} src={user.image} /> })
    return (
        <div>
            {list}
        </div>
    )
}
export default Actors;