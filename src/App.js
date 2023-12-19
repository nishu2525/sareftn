import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './Header/Nav';
// import navbar from './Header/Navbar'
import Footer from './components/Footer/Footer';
import Donate from './Header/Donate';
import JoinPage from './components/JoinPage';
import Reports from './components/Reports';
import Children from './components/Children';
import Donatebtn from './components/Donatebtn';
import Joinus from './components/Joinus';
import Women from './components/Women';
import Lgbtqi from './components/Lgbtqi';
import TermsPg from './components/TermsPg';
import RefundPg from './components/RefundPg';
import Csr from './components/Csr';


function App() {
  return (
   
    <div className="App">
     <Nav />
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
     <Route path="/contact" element={<Contact/>}></Route>
      <Route path='/donate' element={<Donate/>}></Route>
      <Route path='/reports' element={<Reports/>}></Route>
     <Route path='/joinpage' element={<JoinPage/>}></Route> 
      <Route path='/Children' element={<Children/>}></Route>
      <Route path='/women' element={<Women/>}></Route>
      <Route path='/lgbtqi' element={<Lgbtqi/>}></Route> 
     <Route path='/Csr' element={<Csr/>}></Route>
       <Route path='/terms_and_conditions' element={<TermsPg/>}></Route>
      <Route path='/refund_policy' element={<RefundPg/>}></Route>
     </Routes>
     <Donatebtn/>
      <Joinus /> 
     {/* <Footer/>   */}
    </div>
    

  );
}

export default App;
