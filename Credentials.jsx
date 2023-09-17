// En el archivo Credentials.js
const clientId = 'c2137040fb2740258b47d7d2f614ca69';
const clientSecret = '129a7cb4e2314cbe82057c862da34a04';

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

