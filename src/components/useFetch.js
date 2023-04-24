import { useEffect, useState } from "react";

// Custom hook must say use at the beginning

const useFetch = (url) => {
       // State
       const [data, setData] = useState(null);
       const [isPending, setIsPending] = useState(true);
       const [error, setError] = useState(null);
   
        // API handling
        useEffect(() => {
            const abortControl = new AbortController();

            setTimeout(() => {
                fetch(url, { signal: abortControl.signal })
                .then(res => {
                    console.log(res);
                    if(!res.ok) {
                        throw Error("Could not fetch resource data.")
                    }
                return res.json()
                })
                .then(data => {
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null)
                })
                .catch(err => {
                    setIsPending(false)
                    setError(err.message)
                })
            }, 1000);
               
            return () => console.log("Cleanup");
        }, [url]);

        return { data, isPending, error }
}

export default useFetch;