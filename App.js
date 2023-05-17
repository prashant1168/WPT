import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Welcome from './Welcome';
import Add from './Add';

function App() {
  return (
    <div className="App">
     <Welcome></Welcome>
      <Greeting></Greeting>
      <Add></Add>
    </div>
  );
}

export default App;
