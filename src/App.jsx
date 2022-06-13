import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Categories from './components/Main/Categories';

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/search/*" element={<Categories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
