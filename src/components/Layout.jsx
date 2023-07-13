import React, { useState } from "react";
import Overview from "./Overview";
import { Route, Routes } from "react-router-dom";

function Layout({ query }) {
  const [id, setId] = useState();
  return (
    <div className="w-[80%] min-h-screen mx-auto mt-10">
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex md:justify-center w-[100%] flex-wrap mx-auto ">
              <Overview query={query} setId={setId} />
            </div>
          }
        />

      </Routes>
      {/* {query ? (
        <div className="flex md:justify-center w-[100%] flex-wrap mx-auto ">
          <Overview query={query} setId={setId} />
        </div>
      ) : (
        <h1>No Overview Data</h1>
      )} */}
    </div>
  );
}

export default Layout;
