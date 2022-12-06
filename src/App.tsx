import React from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './components/Info';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchDoc from './components/SearchDoc';
import WhyUs from './components/WhyUs';
import SpecialDeal from './components/SpecialDeal';
import Services from './components/Services';
import Question from './components/Question';
import Insurance from './components/Insurance';
import Testimony from './components/Testimony';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    <Info/>
    <Header/>
    <Hero/>
    <SearchDoc/>
    <WhyUs/>
    <SpecialDeal/>
    {/* <Services/> */}
    {/* <Question/> */}
    <Insurance/>
    <Testimony/>
    <Footer/>
    </div>
  );
}

export default App;
