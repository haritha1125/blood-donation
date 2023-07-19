import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home/home"
import Donar from './Components/Donar/donar'
import Footer from './Components/Footer/footer'
import Header from "./Components/Header/header"
import Recipient from "./Components/Recipient/recipient"
import Request from "./Components/Request/request"
import About from "./Components/About/about"
import Hospital from "./Components/Hospital/hospital"
import Hospitalcont from "./Components/Hospitalcont/hospitalcont"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"


function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="about" element={<About />} />
           <Route path="donar" element={<Donar/>}/>
           <Route path="recipient" element={<Recipient/>}/>
           <Route path="request" element={<Request/>}/>
           <Route path="hospitalForm" element={<Hospital/>}/>
           <Route path="hospital" element={<Hospitalcont/>}/>
           <Route path="login" element={<Login/>}/>
           <Route path="register" element={<Register/>}/>
          
       </Routes>
       <Footer/>
     </BrowserRouter>
     </div>
      
  );
}

export default App