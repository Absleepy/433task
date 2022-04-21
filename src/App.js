import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/index';
import AddPost from './Pages/AddPost/index';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-new-post" element={<AddPost />} />

    </Routes>
  </BrowserRouter>
}

export default App;
