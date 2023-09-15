import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PeopleComparison from "./pages/PeopleComparison";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />
        <Route path="/people-comparison" element={<PeopleComparison />} />

        {/* The page for not found url path */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
