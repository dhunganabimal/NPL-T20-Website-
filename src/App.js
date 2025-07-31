//import logo from './logo.svg';
import './App.css';
import './components/slidingSection/Carousal.css'
import Navbar from "./components/navbar/Navbar";
import Carousal from './components/slidingSection/Carousal'
import SectionPart from "./components/sectionPart/SectionPart";
import  './components/slidingSection/Carousal.css';
import one from './components/slidingSection/image1.jpg';
import two from './components/slidingSection/image2.jpg';
import three from './components/slidingSection/image3.jpg';
import four from './components/slidingSection/image4.jpg';
import Sponsers from "./components/sponsers/Sponsers";
function App() {
  return (
    <div className="App">
      <Navbar />
            <div className="carousalApp">
                <Carousal >
                    <img src={one} />
                    <img src={two} />
                    <img src={three} />
                    <img src={four} />
                </Carousal>
            </div>
        <SectionPart />
        <Sponsers/>
    </div>
  );
}

export default App;
