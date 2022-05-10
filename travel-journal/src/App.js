import './App.css';
import Header from "./components/Header"
import Data from "./components/data"
import Card from "./components/Card"
import './App.css';

function App() {
  return (
    <div id="container">
      <Header />
      <section className="card-list">
        {Data.map(card => <Card card={card} key={card.id} /> )}
      </section>
    </div>
  );
}

export default App;
