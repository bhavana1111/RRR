import React from 'react';
import Actors from './actors';
import Header from './Header';
const Ram = () => {
    const RamImages = [
        { id: 1, image: 'https://www.tollywood.net/wp-content/uploads/2021/12/Ram-Charan-confession-His-three-different-shades-in-RRR.jpg' },
        { id: 2, image: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/03/25/1192641-ram-charan-rrr-1.jpg' },
        { id: 3, image: 'https://mc.webpcache.epapr.in/mcms.php?size=medium&in=https://mcmscache.epapr.in/post_images/website_154/post_25829687/thumb.jpg' },
        { id: 4, image: "https://images.firstpost.com/wp-content/uploads/2021/11/RRR.jpg?impolicy=website&width=1200&height=800" }
    ];
    return (
        <>
            <Header />
            <Actors items={RamImages} />
        </>
    )
}
export default Ram;