




function Card(album) {
  return (
    <div className="album-card">
      <img src={album.images[0].url} alt={album.name} />
      <h3>{album.name}</h3>
      <p>Artista: {album.artists[0].name}</p>
      <h3>{album.release_date}</h3>
      <h3>{album.genres}</h3>
      <h3>{album.total_tracks}</h3>
      
      
    </div>
  )
}

export default Card
             
     

  
 