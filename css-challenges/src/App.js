import './App.css';

function App() {
  function spinWords(string){
    const words = string.split(" ")
    const flipped = words.map((word) => {
      if (word.length > 5) {
        const reversed = Array.from(word).reverse()
        const joined = reversed.join("")
        return(joined)
      } else {
        return(word)
      }
    })
    return flipped.join(" ")
  }
  console.log(spinWords( "Hey fellow warriors" ) )

  return (
    <div className="App">
      <div className = 'css-challenge'>
        <div className = 'home'>
          <div className = 'roof-left'/>
          <div className = 'roof-right'/>
          <div className = 'box' />
          <div className = 'door' />
        </div>
      </div>
    </div>
  );
}

export default App;
