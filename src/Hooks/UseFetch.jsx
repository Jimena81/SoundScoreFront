import { useState, useEffect } from "react";

const useFetch = (DynamicUrl) => {
    const [data, setData] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
    const response = await fetch(DynamicUrl);
    const json = await response.json();
    setData(json);
    
    console.log(json);
    };

    fetchData();
  }, [DynamicUrl]); //array de dependencia

    return data; 
};

export default useFetch