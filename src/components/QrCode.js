import React from 'react';

const QrCode = () => {
    return (
        <div className="bg-gray-100 rounded-r-md flex flex-col items-center
                        justify-center">
        <div>
            <img className="w-48" src="https://qrtiger.com/temp/1646893597053.png" alt="qrCode"/>
            <button
            className="bg-blue-400 text-white mt-2 px-4 py-1 w-full"
            >Download</button>
        </div>

        </div>
    );

}
export default QrCode;