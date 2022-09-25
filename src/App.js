import './App.css';
import Left from './Components/Left';
import Right from './Components/Right';
import TopCorner from './Components/TopCorner';
import LowerCorner from './Components/LowerCorner';


function App() {
  return (
    <div className='bod'>
    <TopCorner/>
    <div className="App">
    <Left/>
    <Right/>
    </div>
    <LowerCorner/>
    </div>
  );
}

export default App;
