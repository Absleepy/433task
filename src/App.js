import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/index';
import Login from "./Pages/Login/Login";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} /> 

    </Routes>
  </BrowserRouter>
}

export default App;
