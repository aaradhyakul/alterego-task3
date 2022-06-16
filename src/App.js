
import './App.css';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar'
import AlterEgo from "./components/AlterEgo"
import Metaverse from './components/Metaverse';
import Awards from './components/Awards';
import DynamicBar from './components/DynamicBar';
import Preparallax from './components/Preparallax'
import Parallax from './components/Parallax';


function App() {
  return (
    <div id="app">
      <div id="components">
        <NavBar/>
        <AlterEgo />
        <Metaverse />
        <Awards />


      </div>
      <DynamicBar/>
      <MainPage />
      <div id="wrapper">
      <Preparallax/>
      <Parallax/>
      </div>
     

    </div>
  );
}

export default App;
