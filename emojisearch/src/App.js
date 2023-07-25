import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header/Header";
import SearchBar from "./component/SearchBar/SearchBar";
import EmojisResults from "./component/Emojis/EmojisResults";

function App() {
  return (
    <div>
      <Header></Header>
      <SearchBar></SearchBar>
      <EmojisResults></EmojisResults>
    </div>
  );
}

export default App;
