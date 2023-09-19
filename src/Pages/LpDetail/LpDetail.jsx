import  { useState, useEffect } from 'react';
import SpotifyServiceDetail from '../../Configuration/SpotifyServiceDetail';
//import Card from '../../components/atoms/card/Card';

function LpDetail() {
  const [albumIds, setAlbumIds] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    const ids = [
      '382ObEPsp2rxGrnsizN5TX',
      '2C1A2GTWGtFfWp7KSQTwWOyo',
      '2C2noRn2Aes5aoNVsU6iWThc','50o7kf2wLwVmOTVYJOTplm','6wlsUpq6NrapsweMIOKt0y','151w1FgRZfnKZA9FEcg9Z3','3uE9pNoeClXRFCU1W17F7C','2OTeVRjNthWI2dtzEPnlyF','5r36AJ6VOJtp00oxSkBZ5h','3RJbRaWx4fltb5eabdV8zY','355bjCHzRJztCzaG5Za4gq','5qK8S5JRF8au6adIVtBsmk','3aiVcXoCs55wKiQInCKPth','6dVIqQ8qmQ5GBnJ9shOYGE','52QyC9nSbgtHFXyQRHsXJ9','3pptf2GjIFWO0JlMbpIkKZ','2KUaR4K36tSliwAoUA1gcs','1C4UGzx5gD9b3X0UfAhY7z','3bvS3DlTwV35j2qwFhDvxx','17BYe75slJy2AWCLJBlhvO'
      
    ];
    setAlbumIds(ids);
  }, []);

  const handleAlbumClick = async (albumId) => {
    console.log('click en el album con ID:', albumId)
    setLoading(true);
    try {
      const albumData = await SpotifyServiceDetail.getAlbum(albumId);
      setSelectedAlbum(albumData);
      
    } catch (error) {
      console.error('Error fetching album details:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Lista de Álbumes de Spotify</h1>
      <div className="album-list">
        {albumIds.map(albumId => (
          <div key={albumId} onClick={() => handleAlbumClick(albumId)}>
            <p>Álbum ID: {albumId}</p>
          </div>
        ))}
      </div>
      {selectedAlbum && (
  <div className="album-details">
    {/* Renderizar detalles del álbum aquí */}
    <img src={selectedAlbum.images[0].url} alt={selectedAlbum.name}/>
    <h2>{selectedAlbum.name}</h2>
    <p> {selectedAlbum.artists[0].name}</p>
    <h3>{selectedAlbum.release_date}</h3>
      <h3>{selectedAlbum.genres}</h3>
      <h3>{selectedAlbum.total_tracks}</h3>
    {/* Agrega más detalles según sea necesario */}
        </div>
      )}
    </div>
  );
}

export default LpDetail;
