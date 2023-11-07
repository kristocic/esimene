import Luuletus1 from './Luuletus1';
import Luuletus2 from './Luuletus2';
import './App.css';

function App() {
  const eesNimi = 'Kristo';
  const pereNimi = 'Enn';

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-link">
          Minu nimi on { eesNimi } { pereNimi } 
        </div>
        <Luuletus1 />
        <div>--------------------------</div>
        <Luuletus2 />
      </header>
    </div>
  );
}

export default App;