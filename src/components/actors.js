import React from 'react';
import { ImageList, ImageListItem, Container } from '@material-ui/core';
const Actors = ({ items }) => {
    //console.log(items);
    //const list = items.map((user) => { return <img key={user.id} src={user.image} /> })
    return (
        <Container>
            <ImageList rowHeight={270} cols={1}>
                {items.map(user =>
                    <ImageListItem cols={1}>
                        <img key={user.id} src={user.image} />
                    </ImageListItem>
                )}
            </ImageList>
        </Container>
    )
}
export default Actors;