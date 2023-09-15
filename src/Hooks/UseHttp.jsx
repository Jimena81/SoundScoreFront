import { useState, useCallback } from "react";

export const useHttp = () => {
    const [isLoading, setIsLoading] = useState (false);
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);
        const sendRequest= useCallback(
            async(url, method='GET', body = null) => {
                setIsLoading(true);
                setError(null);
                try{
                    const response = await fetch (url, {
                        method: method, 
                                body: body ? JSON.stringify(body):null,
                                        headers: body ?
                            {'Content-Type': 'application/json'}
                            :{},
                    });
                    if (response.ok){
                        throw new Error('Request failed!');

                    }
                    const data=await response.json();
                    setData(data);
                    
                } catch (err){
                    setError(err.message || 'Something went wrong!');
                }
                setIsLoading(false);
            }, []
        );

        return { isLoading, data, error, sendRequest};
}
    // useEffect(()=>{
    //     setIsLoading(true);
    //     setError(null)
    //     fetch(url) .then(response=>{
    //         if(!response.ok){
    //             setError('Failed to fetch');
    //         throw new Error ('Failed to fetch');
    //         }
    //         return response.json();
    //         })
    //         .then(data=>{
    //             setIsLoading(false);
    //             setError(null);
    //             setData(data);
    //         })
    //         .catch(err=>{
    //             setError(err);
    //             setIsLoading(false);
    //         })
    //     }, [url]);
    //     return { isLoading, error, data
    //     };
    // };



