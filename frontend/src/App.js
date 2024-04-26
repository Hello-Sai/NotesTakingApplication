import React from 'react';
import api from './api'; // Import the api instance
import CreateNote from './components/CreateNote'
import EditNote from './components/EditNote'
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import NoteList from './components/NoteList';
const App = () => {

  

  return (
    <Router>
      <Routes>
            <Route exact path="/" element={<NoteList/>} />
            <Route path="/create" element={<CreateNote />} />
            <Route path="/edit/:id" element = {<EditNote />} />
      </Routes>
       
      </Router>
  );

};

export default App;
