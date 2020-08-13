import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './components/Nav';

import NowPlaying from './components/NowPlaying';
import FullMovie from './components/FullMovie';
import Upcoming from './components/Upcoming';
import SearchMovie from './components/SearchMovie';

//! Styles
import './styles/style.css';

function App(){
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Route path="/" component={ NowPlaying } exact/>
        <Route path="/upcoming" component={ Upcoming }/>
        <Route path="/movie/:id" component={ FullMovie }/>
        <Route path="/search/:name" component={ SearchMovie } />
      </Router>
    </div>
  )
}

export default App;
