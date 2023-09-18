import './newRealeses.css'
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
        <div className="flex justify-between">
            <h3 className="ml-1.5 mt-3">NEW REALESES</h3>
            <h5 className="NrSubtitle">VIEW ALL</h5>
        </div>
        
         <div className='flex flex-row gap-2 flew-wrap mt-5'>
         {Array.isArray(albums) && albums.length > 0 ? (
          albums.map((album) => (
             <LpCard key={album.id} album={album} />
             
          ))
        ) : (
          <p>No se encontraron álbumes.</p>
        )}
            
        </div>
         
        <Footer/>
    </div>
  )
}

export default NewRealeses