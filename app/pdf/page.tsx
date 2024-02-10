'use client';
import { useEffect, useRef } from 'react';

const App: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;

        if (container && typeof window !== 'undefined') {
            import('pspdfkit').then((PSPDFKit) => {
                if (PSPDFKit) {
                    PSPDFKit.unload(container);
                }

                PSPDFKit.load({
                    container,
                    document: '/SCreMember.pdf',
                    baseUrl: `${window.location.protocol}//${window.location.host}/`,
                });
            });
        }
    }, []);

    return <div ref={containerRef} style={{ height: '100vh' }} />;
};

export default App;
