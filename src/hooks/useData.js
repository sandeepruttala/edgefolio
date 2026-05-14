import { useState, useEffect } from 'react';

export const useData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Always use the base path from vite config
                const response = await fetch('/edgefolio/data.json');
                if (!response.ok) throw new Error(`Failed to fetch data: ${response.status}`);
                const jsonData = await response.json();
                setData(jsonData);
                setError(null);
            } catch (err) {
                console.error('Data fetch error:', err);
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Optional: Set up interval to check for data changes (useful for development)
        const interval = setInterval(fetchData, 5000); // Check every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return { data, loading, error };
};
