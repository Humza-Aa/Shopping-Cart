import React from "react";
import './App.css';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';

function App() {


// const login = async () => { // } // const logout = async () => { // }

  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;