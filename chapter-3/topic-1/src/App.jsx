import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PeopleComparison from "./pages/PeopleComparison";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />

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
