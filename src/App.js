import './index.css'
import './App.css';
import Sidebar from './Sidebar';
import Todos from './Todos';
import {CentralStateProvider} from './context/centralState.context';

function App() {

  return (
    <div className="app">
      <div className="wrapper">
        <CentralStateProvider>
          <Sidebar  />
          <Todos />
        </CentralStateProvider>
      </div>
    </div>
  );
}

export default App;
