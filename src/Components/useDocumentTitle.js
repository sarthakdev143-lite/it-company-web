import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useDocumentTitle = (titles) => {
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        const currentTitle = titles[currentPath] + ' | SkyraTech Solutions Pvt Ltd.' || 'Default Title';
        document.title = currentTitle;
    }, [location, titles]);
};

export default useDocumentTitle;