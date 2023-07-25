import logo from "./logo.svg";
import "./App.css";
import CharacterList from "./component/CharacterList";
import { Fragment } from "react";
function App() {
  return (
    <div className="App">
      <CharacterList></CharacterList>
    </div>
  );
}

export default App;
