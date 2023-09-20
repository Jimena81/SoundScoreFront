import './newReleases.css'
import  { useEffect, useState } from 'react';
import SpotifyService from '../../Configuration/SpotifyService';
import NavBar from "../../components/atoms/NavBar/NavBar"
import Footer from "../../components/atoms/footer/Footer"
import LpCard from '../../components/atoms/LpCard/LpCard'

function NewRealeses() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const spotifyAlbums = await SpotifyService.getAlbums();
        console.log(spotifyAlbums)
        setAlbums(spotifyAlbums);
      } catch (error) {
        // Maneja errores aquí
        console.log('hola')
      }
    };

    fetchData();
  }, []);
  return (
    <div>
       <NavBar/>
          <div className='bg-white m-20'>
            <h3 className="ml-4 mb-8 mr-4 mt-8 border-b-2 border-black-800">NEW RELEASES</h3>
                  
            <div className='albumsContainer '>
              {Array.isArray(albums) && albums.length > 0 ? (
                  albums.map((album) => (
                    <LpCard key={album.id} album={album} /> 
                    ))
                        ) : (
                      <p>No se encontraron álbumes.</p>
                      )}
            </div>
          </div>
        <Footer/>
    </div>
  )
}

export default NewRealeses