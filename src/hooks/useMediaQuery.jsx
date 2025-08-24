import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        
        // Set initial value
        setMatches(media.matches);
        
        // Create listener function for media query changes
        const listener = (e) => setMatches(e.matches);
        
        // Add event listener for media query changes
        media.addEventListener('change', listener);
        
        // Cleanup listener on unmount or query change
        return () => media.removeEventListener('change', listener);
    }, [query]);

    return matches;
};

export default useMediaQuery;