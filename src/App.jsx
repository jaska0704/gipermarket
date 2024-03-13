import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout/main-layout";
import { nanoid } from "@reduxjs/toolkit";
import { main_pages } from "./router/main-router";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {main_pages.map((route) => (
            <Route
              path={route.path}
              index={route.path ? false : true}
              key={nanoid()}
              element={route.path ? <Suspense fallback={<h2>Loading</h2>}>{route.component}</Suspense> : route.component}
            />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
