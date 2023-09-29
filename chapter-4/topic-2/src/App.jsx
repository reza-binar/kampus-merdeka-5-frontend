import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchMovies from "./pages/SearchMovies";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchMovies />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
