import './App.css';
import Greet from './components/greetings/greetings';
import ArrayOfObj from './components/greetings/arrayOfObj';
import ArrOfStrAndNum from './components/greetings/arrayOfStringAndNum';
import names from './mockData/names';
import emails from './mockData/email';
import postalCode from './mockData/postalcode';
import Status from './components/greetings/stringUnion';
import Parent from './components/greetings/reactComponentsAsProps/Parent';
import Child from './components/greetings/reactComponentsAsProps/Child';


function App() {
  return (
    <div className="App">
      <Greet name='Jems' isLoggedIn={true} msgCnt={10} /> {/*msgCnt props is non mandotart field*/}
      <ArrayOfObj names={names}/>
      <ArrOfStrAndNum emails={emails} postalCodes={postalCode}/>
      <Status status='error'/>  {/* Here any one asssign any string value, so we can use here union literature types*/}
      <Parent component={<Child />}/>
    </div>
  );
}

export default App;