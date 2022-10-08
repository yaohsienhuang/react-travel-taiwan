import Layout from "./components/Layout";
import Home from "./router/Home";
import List from "./router/List";
import Detail from "./router/Detail";
import History from "./router/History";
import Favorite from "./router/Favorite";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/history" element={<History />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/info/:id" element={<Detail />} />
        </Route>
    </Routes>
  );
}

export default App;
