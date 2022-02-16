import { useEffect, useState } from "react";

export const LogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("isLogin");
}

export const UseFetchUser = (url, requestOption) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);

                const response = await fetch(url, requestOption);
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(response.status);
                }
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return { data, isLoading, error };
};

const UseFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);

                const response = await fetch(url);
                const result = await response.json();

                if (!response.ok) {
                    throw new Error();
                }
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return { data, isLoading, error };
};
export default UseFetch;
