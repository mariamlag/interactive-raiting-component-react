import './App.css';
import Rate from './components/Rate';
import Result  from './components/Result';
import { useState } from 'react';

function App() {
  const [submit, setSubmit] = useState(false);
  const [rate, setRate] = useState();

  return (
    <div className="App">
      {submit ? (
         <Result rate={rate} />
      ) : ( 
      <Rate setSubmit={setSubmit} rate={rate} setRate={setRate}/>
      )}
    </div>
  );
}

export default App;
