import React, { useState } from "react";
import Overview from "./Overview";
import { Route, Routes } from "react-router-dom";
import DetailedReview from "./DetailedReview";

function Layout({ query }) {
   
  const [id, setId] = useState();
  return (
    <div className="w-[80%] min-h-screen mb-5 mx-auto mt-10">
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex md:justify-center w-[100%] flex-wrap mx-auto ">
              <Overview query={query} setId={setId} />
            </div>
          }
        />
        <Route
        path="/:id"
        element={<DetailedReview id={id}/>}
        />

      </Routes>
      
    </div>
  );
}

export default Layout;
