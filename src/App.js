import './App.css';
import {  Route, Routes} from "react-router-dom";
import Userregistration from './components/Userregistration.page';
import Text from './components/text';
import Navbar from './components/Navbar';



export default function App() {
  console.log("wow");
  return (
    <>
    <h1>hello</h1>
    
    <Navbar/>
  <Routes>
    <Route path='/user-reg' element={<Userregistration/>}/>
    <Route path='/text' element={ <Text /> } />
   </Routes>

</>
  );
}


