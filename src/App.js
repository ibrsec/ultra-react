import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cities from "./pages/Cities.jsx";
import CityProvider from "./context/CityProvider.js";
import CityDetail from "./components/CityDetail.jsx";
import Login from "./pages/Login.jsx";
import LoginProvider from "./context/LoginProvider.js";
import PrivateRouter from "./pages/PrivateRouter.jsx";
import People from "./pages/People.jsx";
import PeopleProvider from "./context/PeopleProvider.js";
import PeopleDetail from "./pages/PeopleDetail.jsx";
function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <CityProvider>
          <PeopleProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cities" element={<PrivateRouter />}>
                <Route path="" element={<Cities />} />
                <Route path="/cities/:id" element={<CityDetail />} />
              </Route>
              <Route path="/people" element={<PrivateRouter />}>
                <Route path="" element={<People />} />
                <Route path=":id" element={<PeopleDetail />} />
              </Route>
            </Routes>
          </PeopleProvider>
        </CityProvider>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;

//*ok 1- imagelerin sayisini 10 dusur
//*ok 2- city imagelerin size posiitopnlarini ayarla
//*ok 3- CityCard i component olarak citydetaile al
//*ok 4- navbardaki active classina css yaz
//*ok 5- logini aktif et cities e uygula
//? sonra artik people yi cek yap
