
import './App.css';
import Ram from './components/Ram';
import Home from './components/Home';
import Bheem from './components/Bheem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/Ram" element={<Ram />}></Route>
          <Route path="/Bheem" element={<Bheem />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
//<img src={users[0].image} alt={users[0].name} />
/* <button className='character' value={"Ram"} onClick={handleClickRam}>Ram</button>
      <button className='character' onClick={handleClickAll}>All</button> */