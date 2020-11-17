
import './App.css';
import {Navbar} from "./components/navbar/navbar.component";
import {Hero} from "./components/hero/hero.component";
import {Footer} from './footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      {/* <h1 className="blue-text">Parking Finder Coming Soon...</h1>
      */}
       {/* <Footer/> */}
    </div>
  );
}

export default App;
