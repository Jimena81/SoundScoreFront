import axios from 'axios';


const CLIENT_ID = 'c0a22c43d415449a938d71c756da6ea0';
const CLIENT_SECRET = 'f681d190143a46739027a2f945c3c271';
let token = '';

const getAccessToken = async () => {
  if (!token) {
    try{
    const basicAuth = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      'grant_type=client_credentials',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${basicAuth}`,
        },
      }
    );
    token = response.data.access_token;
  } catch (error) {
    console.error('Error al obtener el token de acceso de Spotify:', error);
    throw error;
  }
  }
  return token;
};

const SpotifyServiceDetail = {
  getAccessToken: async () => {
    const accessToken = await getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    try {
      const response = await axios.get(
     //'https://api.spotify.com/v1/albums?ids=6wlsUpq6NrapsweMIOKt0y',
   // 'https://api.spotify.com/v1/albums?ids=50o7kf2wLwVmOTVYJOTplm,6wlsUpq6NrapsweMIOKt0y',
     'https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc,50o7kf2wLwVmOTVYJOTplm,6wlsUpq6NrapsweMIOKt0y,151w1FgRZfnKZA9FEcg9Z3,3uE9pNoeClXRFCU1W17F7C,2OTeVRjNthWI2dtzEPnlyF,5r36AJ6VOJtp00oxSkBZ5h,3RJbRaWx4fltb5eabdV8zY,355bjCHzRJztCzaG5Za4gq,5qK8S5JRF8au6adIVtBsmk,3aiVcXoCs55wKiQInCKPth,6dVIqQ8qmQ5GBnJ9shOYGE,52QyC9nSbgtHFXyQRHsXJ9,3pptf2GjIFWO0JlMbpIkKZ,2KUaR4K36tSliwAoUA1gcs,1C4UGzx5gD9b3X0UfAhY7z,3bvS3DlTwV35j2qwFhDvxx,17BYe75slJy2AWCLJBlhvO',
       { headers }
    );
      //console.log(response.data)

      return response.data.albums;

    } catch (error) {
      console.error('Error getting Spotify albums:', error);
      throw error;
    }
  },
  getAlbum: async (id) => {
    const accessToken = await getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/albums/${id}`,
        { headers }
      );
      return response.data; // Devuelve los detalles del álbum
    } catch (error) {
      console.error('Error getting Spotify album details:', error);
      throw error;
    }
  },
};






export default SpotifyServiceDetail;