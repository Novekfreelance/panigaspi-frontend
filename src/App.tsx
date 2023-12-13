import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

// Styles
import "./App.css";

// Layouts
import RootLayouts from "./layouts/RootLayouts";
// Pages
import Home from "./pages/Home";
import Particular from "./pages/Particular";
import Professional from "./pages/Professional";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayouts />}>
        <Route index element={<Home />} />
        <Route path="/particular" element={<Particular />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );
  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
