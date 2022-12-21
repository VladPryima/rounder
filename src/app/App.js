import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Stopwatch from './components/Stopwatch';
import ContestantsList from './components/ContestantsList';

function App() {

  return (
    <div className="App">
      <header>
        <h2 className='header'>Таймер</h2>
        <p className='description'>Один учасник - <span className="alert">одна</span>спроба. Спроби учасників розташовані від швдишого до повільнішого.</p>
      </header>
      <Stopwatch />
      <ContestantsList />
    </div>
  );
}

export default App;
