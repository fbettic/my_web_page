import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/home'

function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/'>Home</Link>
        <Routes>
          <Route exact path='/' element={<Home/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
