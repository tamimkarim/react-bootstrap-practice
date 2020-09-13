import React from 'react';
import {Button} from 'react-bootstrap';
import './App.css';
import News from './components/News/News';

function App() {
  return (
    <div>
      <h2>This is react bootstrap</h2>
      <Button variant="primary">Primary</Button>
      <News></News>
    </div>
  );
}

export default App;
