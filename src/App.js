import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cities from "./pages/Cities.jsx";
import CityProvider from "./context/CityProvider.js";
import CityDetail from "./components/CityDetail.jsx";

function App() {
  return (
    <BrowserRouter>
      <CityProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} / > 
            <Route path="/cities/:id" element={<CityDetail />}/>
        </Routes>
      </CityProvider>
    </BrowserRouter>
  );
}

export default App;


//*ok 1- imagelerin sayisini 10 dusur
//*ok 2- city imagelerin size posiitopnlarini ayarla
//*ok 3- CityCard i component olarak citydetaile al
//todo 4- navbardaki active classina css yaz
//todo 5- logini aktif et cities e uygula
//? sonra artik people yi cek yap


