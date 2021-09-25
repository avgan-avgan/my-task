import React from 'react';
import { Cats } from './features/cats/Cats';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
      <Router>
              <Cats />
      </Router>
  );
}

export default App;
