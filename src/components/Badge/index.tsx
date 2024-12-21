import { useEffect } from 'react';

const CredlyBadge = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//cdn.credly.com/assets/utilities/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            data-iframe-width="300"
            data-iframe-height="270"
            data-share-badge-id="39cba5c5-6d6e-4197-873b-f776bf05a384"
            data-share-badge-host="https://www.credly.com"
        ></div>
    );
};

export default CredlyBadge;
