import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import AboutCategory from "./pages/AboutCategory/AboutCategory";
import AboutPlaylist from "./pages/Playlist/AboutPlaylist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="callback" element={<Home />} />
      <Route path="playlist" element={<AboutPlaylist />} />
      <Route path="search" element={<Categories />} />
      <Route path="search/category" element={<AboutCategory />} />
      <Route path="search/category/playlist" element={<AboutPlaylist />} />
    </Routes>
  );
}

export default App;
