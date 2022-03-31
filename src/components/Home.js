import React from 'react';
import { Link } from 'react-router-dom';
import Actors from './actors';
import Header from './Header';
import { ImageList, ImageListItem, Container } from '@material-ui/core';
const Home = () => {
    const users = [
        { name: 'Jenny', age: 21, image: 'https://static.toiimg.com/photo/90422547/90422547.jpg?v=3', id: 1 },
        { name: 'Bheem', age: 25, image: 'https://images.news18.com/telugu/uploads/2022/03/jr-ntr-rrr.jpg', id: 2 },
        { name: 'Ram', age: 26, image: 'https://www.filmibeat.com/img/2022/01/xramcharan-1641038948.jpg.pagespeed.ic.ugE22CHMBT.jpg', id: 3 },
        { name: 'Sita', age: 24, image: 'https://static.toiimg.com/photo/90397718/90397718.jpg?v=3', id: 4 }
    ];

    return (
        <>
            <Header />
            <Container>
                <ImageList rowHeight={370} cols={4}>
                    {users.map(user =>
                        <ImageListItem cols={1}>
                            <Link to={user.name}><img key={user.id} src={user.image} /><p>{user.name}</p></Link>
                        </ImageListItem>
                    )}
                </ImageList>
            </Container>
        </>
    )
}
export default Home;