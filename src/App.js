import React from 'react';
import {Button} from 'react-bootstrap';
import './App.css';
import Header from './components/News/Header/Header';
import News from './components/News/News';
import TopHeadline from './components/News/TopHeadline/TopHeadline';

function App() {
  return (
    <div>
      <h2>This is react bootstrap</h2>
      
      <Header></Header>
      {/* <News></News> */}
      <TopHeadline></TopHeadline>

    </div>
  );
}

export default App;
