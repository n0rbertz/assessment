import './App.css';
import Header from './components/Header'
import Button from './components/Button'
import InputField from './components/InputField';
import convertNumberToWords from './lib/number-conversion'
import {useState} from 'react'

function App() {
  const [conversionType, setConversionType] = useState("standard");
  const [result, setResult] = useState();
  return (
    <div className="container">
      <Header></Header>
      <Button title={"Standard"} color={conversionType === "standard" ? "red" : "white"} onClick={() => setConversionType("standard")}></Button>
      <Button title={"British"} color={conversionType === "british" ? "red" : "white"} onClick={() => setConversionType("british")}></Button>
      <InputField onChange={(event) => setResult(convertNumberToWords(event.target.value, conversionType))}></InputField>
      <h2>{result}</h2>
    </div>
  );
}

export default App;
