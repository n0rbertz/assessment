import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Button from './components/Button'
import {useState} from 'react'

function App() {
  const [conversionType, setConversionType] = useState("standard");
  return (
    <div className="container">
      <Header></Header>
      <Button title={"Standard"} color={"white"}></Button>
      <Button title={"British"} color={"white"}></Button>
    </div>
  );
}

export default App;
