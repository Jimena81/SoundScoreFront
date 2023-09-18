// SpotifyService.js
import axios from 'axios';


const CLIENT_ID = 'c0a22c43d415449a938d71c756da6ea0';
const CLIENT_SECRET = 'f681d190143a46739027a2f945c3c271';
let token = '';

const getAccessToken = async () => {
  if (!token) {
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
  }
  return token;
};

const SpotifyService = {
  getAlbums: async () => {
    const accessToken = await getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    try {
      const response = await axios.get(
       // 'https://api.spotify.com/v1/albums?ids=6wlsUpq6NrapsweMIOKt0y',
      'https://api.spotify.com/v1/albums?ids=50o7kf2wLwVmOTVYJOTplm,6wlsUpq6NrapsweMIOKt0y',
    // 'https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc,50o7kf2wLwVmOTVYJOTplm,6wlsUpq6NrapsweMIOKt0y',
       { headers }
    );
      //console.log(response.data)

      return response.data.albums;

    } catch (error) {
      console.error('Error getting Spotify albums:', error);
      throw error;
    }
  },
};






export default SpotifyService;
