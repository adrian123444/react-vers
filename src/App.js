import React from 'react';
import './App.css';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="container mt-4">
        <div>
          <h1>Welcome to the App</h1>
          <p>Choose a category from the menu.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
