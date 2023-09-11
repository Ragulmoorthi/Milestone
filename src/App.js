
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import { Setpage } from './Components/Fristpage';
import StarRatings from 'react-star-ratings';
import { Getpage } from './Components/Secondpage'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>  
    {/* <Setpage/> */}
    <BrowserRouter>
    <Routes>
     
      <Route path='/' element={<Setpage/>}/>
      <Route path='/proid/:id' element={<Getpage/>}/>

    
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
