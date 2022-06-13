import { useState, useEffect } from 'react';
import { getPlaylist, formatDuration } from "../../api/api"

const Playlist = () => {
    let [playlistInfo, setPlaylistInfo] = useState([]);
    let [playlist, setPlaylist] = useState([]);
    let [photo, setPhoto] = useState("");

    useEffect(() => {
        const getInfoAboutPlaylist = async () => {
            let result = await getPlaylist();
            let info = result;
            setPlaylistInfo(info);
            let photo = result.images[0].url;
            setPhoto(photo);
            let tracks = result.tracks.items;
            setPlaylist(tracks);
        }
        getInfoAboutPlaylist();
    }, []);

    return (
        <main className="main playlist">
            <div className="main__playlist">
                <img className="playlist__image" src={photo} alt=""/>
                <div className="playlist__content">
                    <span className="playlist__head">{playlistInfo.type}</span>
                    <h2 className="playlist__name">{playlistInfo.name}</h2>
                    <p className="playlist__description">{playlistInfo.description}</p>
                </div>
            </div>
            <div className="main__content">
                <table className="main__table">
                <tbody>
                    <tr className="table__row">
                        <th className="table__head">Название</th>
                        <th className="table__head">Альбом</th>
                        <th className="table__head">Дата добавления</th>
                        <th className="table__head">Длительность</th>
                    </tr>
                    {playlist.map((item) => (
                        <tr className="table__items" key={item.track.id}>
                            <td className="table__item">
                                <div className="table__content">
                                    <div className="table__text">
                                        <h2 className="table__track" >{item.track.name}</h2>
                                        <p className="table__author" >{item.track.artists[0].name}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="table__item table__album">{item.track.album.name}</td>
                            <td className="table__item table__date">{new Date(item.added_at).toLocaleDateString()}</td>
                            <td className="table__item table__time">{formatDuration(item.track.duration_ms)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default Playlist;