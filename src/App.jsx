import {HashRouter, Routes, Route, BrowserRouter} from "react-router-dom";
import './App.scss'
import Main from "./Pages/Main.jsx";
import CatalogMain from "./Pages/CatalogMain.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/catalog" element={<CatalogMain />} />
              <Route path="/contact" element={<Contact />} />
              <Route path='/about' element={<About />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
