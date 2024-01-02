import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { apiKey } from "./constants";
import Root from "./pages/layout/Root";
import Home from "./pages/Home/Home";
import Details from "./pages/DetailsPage/Details";
import PageNotFound from "./pages/404/PageNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/detail/:imdbId" element={<Details />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  // console.log(apiKey);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
