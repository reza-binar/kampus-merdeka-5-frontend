import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // global style (bootstrap)
import PeopleComparison from "./pages/PeopleComparison";
import Home from "./pages/Home";
import Header from "./components/Header";
import ModuleStyles from "./pages/ModuleStyles";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people-comparison" element={<PeopleComparison />} />
        <Route path="/module-styles" element={<ModuleStyles />} />

        {/* The page for not found url path */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
