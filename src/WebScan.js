import React from 'react'
import QRCode from 'qrcode'
import { useRef, useState } from 'react'
import QrReader from 'react-qr-reader'
// import QrReader from 'react-camera-qr'

const WebScan = () => {
    const [scanWebCam, setScanWebCam] = useState('')

    const handleErrorWebcam = (error) => {
        console.log(error)
    }
    const handleScanWebcam = async (result) => {
        console.log(result)
        // handleFetch(result)
        setScanWebCam(result)
    }
    const handleFetch = async (result) => {
        if (result === 'MONGO') {

            const response = await fetch('http://localhost:5000/api/post/createdummy', {
                method: 'POST',
                body: JSON.stringify({
                    main: 'scan m',
                    second: 'scan s',
                    description: 'scan d',
                })
            })

            if (response.ok) {
                setScanWebCam('DONE!')
            }
        }
    }

    return (
        <section className="upload-qr f-section">
            <h2>Scan with Camera</h2>
            <QrReader
                delay={300}
                style={{ width: '100%' }}
                onError={handleErrorWebcam}
                onScan={handleScanWebcam}
            />
            <h2>Scanned: {scanWebCam}</h2>
        </section>
    )
}

export default WebScan