import { useState } from 'react';

export const useStoreSearch = () => {
    const [error, setError] = useState(null);
    const [isStored, setIsStored] = useState(false);

    const storeSearchTerm = async (search_term) => {
        try {
            const response = await fetch('https://myescape.online/api/search/store', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ search_term }),
                credentials: 'include',
            });
            const responseData = await response.json();
            console.log(responseData);
    
            if (response.ok) {
                setIsStored(true);
            } else {
                throw new Error('Failed to store search term');
            }
        } catch (err) {
            setError(err.message);
            console.error(err);
        }
    };

    return { storeSearchTerm, error, isStored };
};