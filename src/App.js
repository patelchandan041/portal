import './App.css';
import Header from './components/Header';
import Header2 from './components/Header2';
import Home from './components/Home'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header />
       <Header2 />
       <Home />
       </BrowserRouter>
    </div>
  );
}

export default App;
