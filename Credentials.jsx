// En el archivo Credentials.js
const clientId = '6df815aa70b7476095d70a7da5087451';
const clientSecret = '280a427e56b142c9baf27ca7b71c708f';

export async function _getToken() {
  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    body: 'grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret'
  });

  const data = await result.json();
  return data.access_token;
}

