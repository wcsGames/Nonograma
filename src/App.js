import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NonogramApp from './components/Games/Nonogram/NonogramApp.js';


function App () {
  
    return (
        <div className='App'>
          <Router>
            <Route path='/'>
              <NonogramApp />
            </Route>
          </Router>
        </div>

    );
  }

export default App
