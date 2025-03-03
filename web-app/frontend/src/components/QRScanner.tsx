import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

const QRScanner: React.FC = () => {
    const [data, setData] = useState<string | null>(null);

    const handleScan = (data: string | null) => {
        if (data) {
            setData(data);
            // Here you would typically send the scanned data to the backend
            // to handle the arrival or departure of the student
            // For example: sendToBackend(data);
        }
    };

    const handleError = (err: any) => {
        console.error(err);
    };

    return (
        <div>
            <h2>QR Code Scanner</h2>
            <QrReader
                onScan={handleScan}
                onError={handleError}
                style={{ width: '100%' }}
            />
            {data && <p>Scanned Data: {data}</p>}
        </div>
    );
};

export default QRScanner;