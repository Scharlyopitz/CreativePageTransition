import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Nav from "./components/Nav";
import { AnimatePresence } from "motion/react";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <Nav />
      <AnimatePresence>
        <Routes location={pathname} key={pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
