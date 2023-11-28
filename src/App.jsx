
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"


function App() {
  return (
    
      <div className="App">
          <Navbar/>
          <Footer/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/detail" element={<Detail/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/favs" element={<Favs/>}/>
          </Routes>
      </div>
    
      
  );
}

export default App;
