import { useDispatch, useSelector } from "react-redux";
import Home from "./components/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";

function App() {

  return (
    <div className="App">
    <GlobalStyles />
    <Nav />
      <Routes>
        <Route path={"/game/:id"} element={<Home />}/>
        <Route path={"/"} element={<Home />}/>
      </Routes>
        </div>
  );
}

export default App;
