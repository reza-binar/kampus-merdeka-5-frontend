import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchMovies from "./pages/SearchMovies";
import DetailsMovie from "./pages/DetailsMovie";
import NavbarComponent from "./components/Navbar";
import Login from "./pages/Login";

function App() {
    return (
        <BrowserRouter>
            <NavbarComponent />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchMovies />} />
                <Route path="/details/:movieId" element={<DetailsMovie />} />

                {/* Authentication */}
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
