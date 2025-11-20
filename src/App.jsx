import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.scss'
import Main from "./Pages/Main.jsx";
import CatalogMain from "./Pages/CatalogMain.jsx";
import Contact from "./Pages/Contact.jsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/catalog" element={<CatalogMain />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
