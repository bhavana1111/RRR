import React from 'react';
import Actors from './actors';
import Header from './Header';
const Bheem = () => {
    const BheemImages = [
        { id: 1, image: 'https://static.toiimg.com/photo/msid-88488098/88488098.jpg?23618' },
        { id: 2, image: 'https://images.news18.com/ibnlive/uploads/2021/11/untitled-3-24.jpg' },
        { id: 3, image: 'https://images.tv9kannada.com/wp-content/uploads/2022/03/Jr-NTR-RRR-1.jpg?format=webp&dpr=1.5' },
        { id: 4, image: "https://c.tenor.com/Ynxky-Sy47cAAAAd/jr-ntr-rrr-ntr.gif" }
    ];
    return (
        <>
            <Header />
            <Actors items={BheemImages} />
        </>
    )
}
export default Bheem;