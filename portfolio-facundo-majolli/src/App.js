import './App.css';
import Home from './pages/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from './pages/Contact'
import About from './pages/About';
import Error404 from './componentes/componentes/Error404';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {home, about, contact} from './constants/constants'





function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={home} exact element={<Home/>}/>
      <Route path={contact} element={<Contact/>}/>
      <Route path={about} element={<About/>}/>
      <Route path='*' element={<Error404/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
