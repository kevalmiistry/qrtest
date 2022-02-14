import React from 'react'
import QRCode from 'qrcode'
import { useRef, useState } from 'react'
import QrReader from 'react-qr-reader'

const ScanFile = () => {
    const imgRef = useRef(null)
    const [scanFile, setScanFile] = useState('')

    const handleErrorFile = (error) => {
        console.log(error)
    }

    const handleScanFile = (result) => {
        if (result) {
            setScanFile(result)
        }
    }

    const onScanFileClick = () => {
        imgRef.current.openImageDialog()
    }

    return (
        <section className="upload-qr f-section">
            <button onClick={onScanFileClick}>Scan the QR image</button>
            <QrReader
                ref={imgRef}
                delay={300}
                style={{ width: '100%' }}
                onError={handleErrorFile}
                onScan={handleScanFile}
                legacyMode
            />
            <h2>Scanned: {scanFile}</h2>
        </section>
    )
}

export default ScanFile