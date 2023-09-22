// import  { useState, useEffect } from 'react';
// import SpotifyServiceDetail from '../../Configuration/SpotifyServiceDetail';
// //import Card from '../../components/atoms/card/Card';
// import { useParams } from 'react-router-dom';


// function LpDetail() {
//   const {id} = useParams
//   const [album, setAlbum] = useState({});

//   useEffect(() => {
//     console.log("ID del álbum que se va a buscar:", id);
//     const fetchData = async () => {
//       try {
//         const albumS = await SpotifyServiceDetail.getAlbum(id);
//         console.log(albumS)
//         setAlbum(albumS);
//       } catch (error) {
//         // Maneja errores aquí
//         console.log('hola')
//       }
//     };

//     fetchData();
//   }, [id]);

  

//   return (
//     <div className="App">
//       <h1>Lista de Álbumes de Spotify</h1>
      
//       {album && (
//   <div className="album-details">
    
//     {/* <img src={album.images[0].url} alt={album.name}/> */}
//     <h2>{album.name}</h2>
//     {/* <p> {album.artists[0].name}</p> */}
//       <h3>{album.release_date}</h3>
//       <h3>{album.genres}</h3>
//       <h3>{album.total_tracks}</h3>
//       <a href="/PostReview"> <button>Review</button></a>
//         </div>
       
//       )}
//     </div>
//   );
// }

// export default LpDetail;


//import axios from 'axios';
import { useState, useEffect } from 'react';
import SpotifyServiceDetail from '../../Configuration/SpotifyServiceDetail';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/atoms/NavBar/NavBar';
import Footer from '../../components/atoms/footer/Footer'

function LpDetail() {
  const { id } = useParams();
  const [album, setAlbum] = useState({});
  const [albumId, setAlbumId] = useState(id);

  useEffect(() => {
    setAlbumId(id);
  }, [id]);

  useEffect(() => {
    console.log("ID del álbum que se va a buscar:", albumId);
    const fetchData = async () => {
      try {
        const albumS = await SpotifyServiceDetail.getAlbum(albumId);
        console.log(albumS);
        setAlbum(albumS);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, [albumId]);

  return (
    <div className="App">
      <NavBar/>

      {album && (
        <div className="album-details mt-20 ml-5 mr-5">
          {Array.isArray(album.images) && album.images.length > 0 && (
            <img className="w-96" src={album.images[1].url} alt={album.name} />
          )}
          <h3 className='text-lg text-gray-800 mt-3'>{album.name}</h3>
          {album.artists && album.artists.length > 0 && (
            <h3 className="text-based  text-gray-700">{album.artists[0].name}</h3> 
          )}
          <h3>Release at: {album.release_date}</h3>
          <h3>{album.genres}</h3>
          <h3>Tracks: {album.total_tracks}</h3>
          <h3>Popularity: {album.popularity}</h3>
          <a href="/PostReview"> <button className='bg-custome rounded-lg px-6 mt-10'>Review</button></a>
        </div>
      )}

      <Footer/>
    </div>
  );
}

export default LpDetail;
