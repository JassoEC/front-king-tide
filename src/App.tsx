import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppState } from "./context/AppState";
import { AppRouting } from "./AppRouting";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AppState>
          <AppRouting />
        </AppState>
      </BrowserRouter>
    </div>
  );
};

export default App;
