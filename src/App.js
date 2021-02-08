import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import GameOver from './pages/GameOver';
import Game from './pages/Game';
import HighScores from './pages/HighScores';

import { Container } from './styled/Container';
import { Main } from './styled/Main';
import Global from './styled/Global';

function App() {
  return (
    <Router>
      <Global/>
        <Main>
          <Container>
            <Navbar />
            <Switch>
              <Route path="/game" component={Game} />
              <Route path="/highscore" component={HighScores} />
              <Route path="/gameOver" component={GameOver} />
              <Route path="/" component={Home} />
            </Switch>
          </Container>
        </Main>
    </Router>
  );
}

export default App;
