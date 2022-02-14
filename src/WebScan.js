import React from 'react'
import QRCode from 'qrcode'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import QrReader from 'react-qr-reader'

const WebScan = () => {
    // let hist = useNavigate(null)
    const [scanWebCam, setScanWebCam] = useState('')

    const handleErrorWebcam = (error) => {
        console.log(error)
    }
    const handleScanWebcam = async (result) => {
        if (result === 'MONGO') {
            console.log(result)
            // handleFetch(result)
            // hist('/done')
            setScanWebCam(result)
        }
        // setScanWebCam(result)
    }
    const handleFetch = async (result) => {
        const response = await fetch('http://localhost:5000/api/tweet/addtweet', {
            method: 'POST',
            body: JSON.stringify({
                head: 'scan m',
                msg: 'scan s',
                foot: 'scan d',
            })
        })
        if (response.ok) {
            setScanWebCam('DONE!')
        }
    }

    return (
        <section className="upload-qr f-section">
            <h2>Scan with Camera</h2>
            <div className="webcam-container">
                <QrReader
                    delay={300}
                    style={{ width: '100%' }}
                    onError={handleErrorWebcam}
                    onScan={handleScanWebcam}
                />
            </div>
            <h2>Scanned: {scanWebCam}</h2>
        </section>
    )
}

export default WebScan