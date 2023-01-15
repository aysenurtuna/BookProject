import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const handleChange = (event) => setSearch(event.target.value);

  return (
    <div className="App">
        <Navbar search={search} handleChange={handleChange}></Navbar>
        <Main search={search}></Main> 
    </div>
  );
}

export default App;
