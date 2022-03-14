import './App.css';
import Header from './components/Header'
import Button from './components/Button'
import InputField from './components/InputField';
import {useState} from 'react'

function App() {
  const [conversionType, setConversionType] = useState("standard");
  return (
    <div className="container">
      <Header></Header>
      <Button title={"Standard"} color={conversionType === "standard" ? "red" : "white"} onClick={() => setConversionType("standard")}></Button>
      <Button title={"British"} color={conversionType === "british" ? "red" : "white"} onClick={() => setConversionType("british")}></Button>
      <InputField></InputField>
    </div>
  );
}

export default App;
