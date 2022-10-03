import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  
  const [age, setAge] = useState();
  const [upper, setUpper] = useState();
  const [lower, setLower] = useState();

  function Calculate(e) {
    setAge(age);
    setUpper((220 - age) * 0.85);
    setLower((220 - age) * 0.65);
  }




  return (
    <div>
      <h1>My heart rate limits calculator</h1>
        <form>
          <div>
           <label>Age</label>
           <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </div>
      <div>
        <label>Heart rate limits </label>
        <output>{lower} - {upper}</output>
        </div>
      <button type="button" onClick={Calculate}> Calculate</button>
      </form>
     </div>
  );
}




export default App;