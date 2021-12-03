import React from 'react';
import './app.css';
import Quote from './components/Quote';

function App() {
  return (
    <div className="container text-center">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg" 
        alt="Breaking Bad"  
      />
      <Quote />
    </div>
  );
}

export default App;
