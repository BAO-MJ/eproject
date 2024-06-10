import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

/*
 * Registers a history listener on mount which
 * scrolls to the top of the page on route change
 */

// https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
export function ScrollToTop() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (null);
};