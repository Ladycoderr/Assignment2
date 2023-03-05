import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import SideBar from "./Components/SideBar";
import Home from "./Components/Home";
//import { debounce } from "./debounce";
function App() {
  const [books, setBooks] = useState(null);
  const [title, setTitle] = useState(null);
  const [offset, setOffset] = useState(0);
  const fetcData = async (key = "title", value, offst = 0) => {
    setBooks(null);
    setTitle(value);
    const res = await axios.get(
      `https://openlibrary.org/search.json?${key}=${value}&offset=${offst}&limit=10`
    );
    setBooks(res.data.docs);
  };
  return (
    <div className="App row">
      <SideBar fetchData={fetcData} setTitle={setTitle} />
      <div className="col-9" style={{ paddingLeft: "0px" }}>
        <Home
          fetchData={fetcData}
          books={books}
          title={title}
          setTitle={setTitle}
          offset={offset}
          setOffset={setOffset}
        />
      </div>
    </div>
  );
}

export default App;
