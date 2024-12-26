import { useState, useEffect} from "react";

export function useFetch(url){
    const [item, setItem]= useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
            setLoading(true)
            fetch (url)
            .then((response) => response.json())
            .then((item) => setItem(item))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
        }, [url]); 
        return { item , loading, error };
}


