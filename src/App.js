import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Foot from './components/Foot';



function App() {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <Analytics/>
       <Newsletter/>
       <Cards/>
       <Foot/>
    </div>
  );
}

export default App;
