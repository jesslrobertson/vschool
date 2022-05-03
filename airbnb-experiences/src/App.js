import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Card from './components/Card.js';
import Data from './components/data.js';
import './App.css';



function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      {Data.map(card => <Card card={card} key={card.id} /> )}
    </div>
  );
}

export default App;
