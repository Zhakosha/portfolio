import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import About from './components/About';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Header/>
      <Title/>
      <About/>
      <Experience/>
    </div>
  );
}

export default App;
