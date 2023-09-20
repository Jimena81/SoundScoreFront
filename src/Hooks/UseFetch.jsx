import { useState, useEffect } from "react";

function useFetch (url) {
    const [data, setData] = useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(url);
          const jsonData = await response.json();
          setData(jsonData);
          setLoading(false);
    } catch(error) {
      console.error('Error fetchig data:', error);
      setLoading(false);
    }
  } 
    

    fetchData();
  }, [url]); //array de dependencia

    return {data, loading}; 
}

export default useFetch