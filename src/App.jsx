import React, { useState } from "react";
import Search from "./components/Search";

function App() {
  const [query, setQuery] = useState()
  return (<Search setQuery={setQuery} />)
}

export default App;
