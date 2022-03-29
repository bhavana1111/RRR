
import './App.css';
import Actors from './components/actors';
import Header from './components/Header';
import Buttons from './components/Buttons';
import { useState, useEffect } from 'react';
function App() {

  const users = [
    { name: 'Jenny', age: 21, image: 'https://static.toiimg.com/photo/90422547/90422547.jpg?v=3', id: 1 },
    { name: 'Bheem', age: 25, image: 'https://images.news18.com/telugu/uploads/2022/03/jr-ntr-rrr.jpg', id: 2 },
    { name: 'Ram', age: 26, image: 'https://www.filmibeat.com/img/2022/01/xramcharan-1641038948.jpg.pagespeed.ic.ugE22CHMBT.jpg', id: 3 },
    { name: 'Sita', age: 24, image: 'https://static.toiimg.com/photo/90397718/90397718.jpg?v=3', id: 4 }
  ];
  const Ram = [
    { id: 1, image: 'https://www.tollywood.net/wp-content/uploads/2021/12/Ram-Charan-confession-His-three-different-shades-in-RRR.jpg' },
    { id: 2, image: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/03/25/1192641-ram-charan-rrr-1.jpg' },
    { id: 3, image: 'https://mc.webpcache.epapr.in/mcms.php?size=medium&in=https://mcmscache.epapr.in/post_images/website_154/post_25829687/thumb.jpg' },
    { id: 4, image: "https://images.firstpost.com/wp-content/uploads/2021/11/RRR.jpg?impolicy=website&width=1200&height=800" }
  ];
  const [characters, setCharacters] = useState(users);
  function handleClickRam() {
    setCharacters(Ram);
  }
  function handleClickAll() {
    setCharacters(users);
  }
  return (
    <>
      <Header />
      <button className='character' value={"Ram"} onClick={handleClickRam}>Ram</button>
      <button className='character' onClick={handleClickAll}>All</button>
      <Actors items={characters} />
    </>
  );
}

export default App;
//<img src={users[0].image} alt={users[0].name} />