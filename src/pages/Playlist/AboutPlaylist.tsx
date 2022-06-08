import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';
import Playlist from '../../components/Main/Playlist';


function AboutPlaylist() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Playlist />
      <Footer />
    </div>
  );
}

export default AboutPlaylist;