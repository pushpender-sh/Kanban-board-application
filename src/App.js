import logo from "./logo.svg";
import "./App.css";
import Body from "./Body";
import { MyContextProvider } from "./context";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MyContextProvider>
        <div className="App">
          <Body />
        </div>
      </MyContextProvider>
    </BrowserRouter>
  );
}

export default App;
