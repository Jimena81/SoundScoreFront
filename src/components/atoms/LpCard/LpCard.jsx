/* eslint-disable react/prop-types */

function LpCard({album}) {
  console.log(album)
  return (
    <div className="album-card p-2">
     {Array.isArray(album.images) && album.images.length > 0 && (
      <img className="w-96" src={album.images[1].url} alt={album.name} />
      )}
        <a href={`/album/${album.id}`}>
        <h3 className="text-based mt-3 hover:underline font-semibold ml-2 text-gray-700">{album.name}</h3>
        </a>
       
      {album.artists && album.artists.length > 0 && (
        <p className="text-based ml-4 text-gray-700">Artist: {album.artists[0].name}</p>
        
      )}

      
    </div>
    
  );
}

export default LpCard