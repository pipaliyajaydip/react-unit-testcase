import './App.css';
import Greet from './components/greetings/greetings';
import ArrayOfObj from './components/greetings/arrayOfObj';
import ArrOfStrAndNum from './components/greetings/arrayOfStringAndNum';
import names from './mockData/names';
import emails from './mockData/email';
import postalCode from './mockData/postalcode';


function App() {
  return (
    <div className="App">
      <Greet name='Jems' msgCnt={10} isLoggedIn={true} />
      <ArrayOfObj names={names}/>
      <ArrOfStrAndNum emails={emails} postalCodes={postalCode}/>
    </div>
  );
}

export default App;