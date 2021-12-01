import React from "react"
import Header from './Header.js';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons'
import Chats from "./Chats.js";
import ChatScreen from "./ChatScreen"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

import './App.css';

function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
        <Route path="/chat/:person">
        <Header backButton="/chat" />
        <ChatScreen />
          </Route>
         <Route path="/chat">
        <Header backButton="/" />
          <Chats />
          </Route>
        <Route path="/">
          <Header />
         <TinderCards />
         <SwipeButtons />
        </Route>
      </Switch>
    </Router>
    


      {/* header */}
      {/* tinder cards */}
      {/* Buttons below tinder */}

      {/* Chat Screen */}
      {/* Individual chat screen */}


    </div>
  );
}

export default App;
