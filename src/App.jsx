import React, { useState } from "react";
import Search from "./components/Search";
import Layout from "./components/Layout";


function App() {
  const [query, setQuery] = useState()
  return (
    <>
    <Search setQuery={setQuery} />
    <Layout query={query}/>
    </>
  )
}

export default App;
