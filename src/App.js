import React from 'react';
import Home from './components/home';
import Main from './components/main';
// import Third from './components/third';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reverser from './components/sentencereverser';
import Palindrome from './components/palindrome';
import GradeCalculator from './components/GradeCalculator';
import Guessing from './components/guessing';
import Create from './components/createTable';
import BlackJack from './components/BLackjack';
import Calc from './components/calc.jsx';
import Images from './components/images';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
        <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/main' element={<Main />}></Route>
          <Route exact path='/reverser' element={<Reverser />}></Route>
          <Route exact path='/palindrome' element={<Palindrome />}></Route>
          <Route exact path='/grades' element={<GradeCalculator />}></Route>
          <Route exact path='/guess' element={<Guessing />}></Route>
          <Route exact path='/createTable' element={<Create />}></Route>
          <Route exact path='/blackJack' element={<BlackJack />}></Route>
          <Route exact path='/calc' element={<Calc />}></Route>
          <Route exact path='/image' element={<Images />}></Route>


        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;