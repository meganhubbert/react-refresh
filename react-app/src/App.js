import './App.css';
import { animals } from './components/animals';

const title = "";
const images = [];

for (const animal in animals) {
  images.push(<img 
    key={animal} 
    className={`${animal} animal`}
    alt={animal}
    src={animals[animal].image}
    aria-label={animal}
    role='button'
    onClick={displayFact} 
  />)
};

function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random()*animalInfo.facts.length);
  const funFact = animalInfo.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;
}

function App() {
  return (
    <div className="App">
      <h1>{!title ? 'Click on an animal for a fun fact!' : title}</h1>
      <p className="fact" id='fact'></p>
      <div className='animals'>
        {images}
      </div>
    </div>
  );
}

export default App;
