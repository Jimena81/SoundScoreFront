import { useState, useEffect } from "react";
import axios from "axios";
import { _getToken } from "../../../../Credentials";

export default function LpCard({ album, name, artists }) {
  const [token, setToken] = useState('');
  const [tokenExpiration, setTokenExpiration] = useState(0);
  const [apiData, setApiData] = useState(null); // Definir apiData en el estado

  // Función para verificar si el token está vencido o cerca de vencer
  const isTokenExpired = () => {
    return Date.now() >= tokenExpiration;
  };

  // Función para obtener un nuevo token
  const renewToken = async () => {
    try {
      const newToken = await _getToken();
      const expirationTime = Date.now() + 3600 * 1000; // Supongamos que el nuevo token expira en 1 hora
      setToken(newToken);
      setTokenExpiration(expirationTime);
    } catch (error) {
      console.error("Error al renovar el token:", error);
    }
  };

  useEffect(() => {
    // Verifica si el token está vencido o cerca de vencer
    if (isTokenExpired()) {
      // Si está vencido, renueva el token
      renewToken();
    }

    // Realiza una solicitud a la API usando el token
    axios.get('https://api.spotify.com/v1/token', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((response) => {
      // Maneja la respuesta de la API aquí
      const responseData = response.data;
      setApiData(responseData); // Actualiza el estado con los datos de la API
    })
    .catch((error) => {
      console.error("Error en la solicitud a la API de Spotify:", error);
      // Maneja los errores de la solicitud aquí, como mostrar un mensaje de error al usuario
    });
  }, [token]); // El efecto se ejecutará cada vez que el token cambie

  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <a href="#!">
        <img
          className="rounded-t-lg"
          src={album?.images?.[0]?.url ?? ''}
          alt={name}
        />
      </a>
      <div className="p-6">
        <h5 htmlFor={name} className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {name}
        </h5>
        <p htmlFor={artists && artists[0] && artists[0].name} className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {artists && artists[0] && artists[0].name}
        </p>

        {/* Aquí puedes usar apiData para mostrar información de la API en la interfaz de usuario */}
        {apiData && (
          <div>
            <h6>Información de la API:</h6>
            <pre>{JSON.stringify(apiData, null, 2)}</pre>
          </div>
        )}
        
        <a href="/LpDetail">
          <button  
            type="button"
            className="bg-custome inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg_primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Detail
          </button>
        </a>
      </div>
    </div>
  );
}
