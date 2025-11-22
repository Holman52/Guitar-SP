import {HashRouter, Routes, Route} from "react-router-dom";
import './App.scss'
import Main from "./Pages/Main.jsx";
import CatalogMain from "./Pages/CatalogMain.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";

function App() {

  return (
      <HashRouter>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/catalog" element={<CatalogMain />} />
              <Route path="/contact" element={<Contact />} />
              <Route path='/about' element={<About />} />
          </Routes>
      </HashRouter>
  )
}

export default App
