import logo from './Bitcoin.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="appHeader">
        <img src={logo} className="appLogo" alt="logo" />
        <p className="titleSpan">Stablesend</p>
        <button>Register as a Business</button>
        <button>Wallet Tutorial</button>
      </header>
      
    </div>
  );
}

export default App;
