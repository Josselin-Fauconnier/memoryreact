
import Header from './components/Header/header';
import NavBar from './components/Nav-bar/nav-bar';
import './App.css';
import { use, useState } from 'react';

function App() {
  const [pairCount, setPairCount] = useState(6);

  const handlePairCountChange = (count) => {
    setPairCount(count);
  }
    
  return (
        <div >
            <Header/> 
            <main>
              <NavBar onPairCountChange={handlePairCountChange}/>
              
               
            </main>
        </div>
    );
}

export default App;