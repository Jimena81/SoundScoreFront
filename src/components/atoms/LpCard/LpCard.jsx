/* eslint-disable react/prop-types */

function LpCard({album}) {
  console.log(album)
  return (
    <div className="album-card">
     {Array.isArray(album.images) && album.images.length > 0 && (
  <img src={album.images[0].url} alt={album.name} />
)}
        <h3>{album.name}</h3>
        <h3>{album.tracks.items[1].name}</h3>
      {album.artists && album.artists.length > 0 && (
        <p>Artista: {album.artists[0].name}</p>
        
      )}

      <div>
        <button className="">Review</button>
      </div>
    </div>
    
  );
}

export default LpCard