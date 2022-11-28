import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Routing from './Router.component';
import Header from './component/featurs/header/Header.component';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routing/>
      </BrowserRouter>
    </div>
  );
}

export default App;
