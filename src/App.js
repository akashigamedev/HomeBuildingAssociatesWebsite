import './index.css';
import Whoweare from './about/whoweare';
import Card from './about/card';
import Leader from './about/meet our leader';
import Achivements from './about/achivements';
function App() {
  return (
    <div className="App">
   <div >
  
      <Whoweare/>
    
      <Card/>
      <Leader/>
      <Achivements/>
      </div>
    </div>
  );
}

export default App;