import { useDispatch, useSelector } from "react-redux";
import Home from "./components/Home";
import GlobalStyles from "./components/GlobalStyles";

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
