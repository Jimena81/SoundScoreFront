import  { useState, useEffect } from 'react';
import SpotifyServiceDetail from '../../Configuration/SpotifyServiceDetail';
//import Card from '../../components/atoms/card/Card';
import { useParams } from 'react-router-dom';


function LpDetail() {
  const {id} = useParams
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    console.log("ID del álbum que se va a buscar:", id);
    const fetchData = async () => {
      try {
        const albumS = await SpotifyServiceDetail.getAlbum(id);
        console.log(albumS)
        setAlbum(albumS);
      } catch (error) {
        // Maneja errores aquí
        console.log('hola')
      }
    };

    fetchData();
  }, [id]);

  

  return (
    <div className="App">
      <h1>Lista de Álbumes de Spotify</h1>
      
      {album && (
  <div className="album-details">
    
    {/* <img src={album.images[0].url} alt={album.name}/> */}
    <h2>{album.name}</h2>
    {/* <p> {album.artists[0].name}</p> */}
      <h3>{album.release_date}</h3>
      <h3>{album.genres}</h3>
      <h3>{album.total_tracks}</h3>
      <a href="/PostReview"> <button>Review</button></a>
        </div>
       
      )}
    </div>
  );
}

export default LpDetail;
