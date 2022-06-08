import album from '../../images/album.png'

function Footer(){
    return (
        <footer className="footer">
        <div className="footer__left">
          <a href="aboutAlbum" className="footer__photo">
            <img className="footer__photo" src={album} alt=""/>
          </a>
          <div className="footer__description">
            <h2 className="footer__nameOfAlbum"> Название альбома </h2>
            <p className="footer__autor"> Автор </p>
          </div>
        </div>
        <div className="footer__center">
          <p className="footer__player"> Плеер </p>
        </div>
        <div className="footer__right">
          <p className="footer__volume"> Громкость </p>
        </div>
      </footer>
    );
}

export default Footer;