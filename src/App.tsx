import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import AboutCategory from "./pages/AboutCategory/AboutCategory";
import AboutPlaylist from "./pages/Playlist/AboutPlaylist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/callback" element={<Home />} />
      <Route path="/playlist.html" element={<AboutPlaylist />} />
      <Route path="/search.html" element={<Categories />} />
      <Route path="/search.html/category.html" element={<AboutCategory />} />
      <Route path="/search.html/category.html/playlist.html" element={<AboutPlaylist />} />
    </Routes>
  );
}

export default App;
