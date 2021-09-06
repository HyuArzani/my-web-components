import logo from './logo.svg';
import './App.css';
import '../../svelte-web-component/public/build/bundle'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <svelte-hello-world/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
