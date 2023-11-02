import logo from "./logo.svg";
import "./App.css";
import Body from "./Body";
import { MyContextProvider } from "./context";

function App() {
  return (
    <MyContextProvider>
      <div className="App">
        <Body />
      </div>
    </MyContextProvider>
  );
}

export default App;
