import { useState, useEffect } from "react";


const useToken = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
            if (storedToken) {
                setToken(storedToken);
            }
    }, []);

    const saveToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
    };

    return {token, saveToken};
};

export default useToken