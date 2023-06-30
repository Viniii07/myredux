import logo from './logo.svg';
import './App.css';
import { WithoutRedux } from './Components/WithoutRedux/WithoutRedux';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Menu } from './Components/Menu';
import { useSelector } from 'react-redux';

function App() {
  // const completeState= useSelector((s)=>s);
  return (
    <div className="App">
      {/* <h1>{completeState?.nameLoc?.name}</h1> 
      <h1>{completeState?.nameLoc?.loc}</h1> */}
     {/* <WithoutRedux/> */}
     <Header/>
     <Footer/>
     <Menu/>
    </div>
  );
}

export default App;
