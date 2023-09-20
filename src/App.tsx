
import './App.css'
import Title from './components/Header/Title'
import Middle from './components/Middle/Middle'
import { useState } from 'react';

function App() {
  const [activeLight, setActiveLight] = useState<boolean>(true);
  const changeActiveLight = () => setActiveLight(!activeLight);


  return (
    <div className={`App ${activeLight ? 'app-light-mode' : 'app-dark-mode'}`}>
      {/* <div onClick={changeActiveLight}>mode Change</div> */}
      <div className={`mediaScreen `}>
        <Title onClick={changeActiveLight} activeLight={activeLight} />
        <Middle activeLight={activeLight} />
      </div>
    </div>
  )
}

export default App
