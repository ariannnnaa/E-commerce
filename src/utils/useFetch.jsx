import { useEffect, useState } from 'react';

const url = "https://fakestoreapi.com/";

const useFetch = (param) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchProducts = async (urlQuery) => {
        setIsLoading(true);
        try {
            const reponse = await fetch(urlQuery);
            const data = await reponse.json();
            setData(data);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

useEffect(() => {
fetchProducts(`${url}${param}`);
},[param]);

return {data, isLoading}
}

export default useFetch;
