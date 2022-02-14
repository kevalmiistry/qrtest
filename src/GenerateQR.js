import React from 'react'
import QRCode from 'qrcode'
import { useRef, useState } from 'react'
import QrReader from 'react-qr-reader'

const GenerateQR = () => {
    const [text, setText] = useState('')
    const [imageURL, setImageURL] = useState('')

    const handleGenerateQR = async () => {
        try {
            const response = await QRCode.toDataURL(text)
            setImageURL(response)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="text-field f-section">
            <input type="text" name="text-f" id="text-f" onChange={(e) => setText(e.target.value)} />
            <button type="button" onClick={handleGenerateQR}>Generate</button>
            <br />
            <br />
            <br />
            {imageURL && (
                <>
                    <img src={imageURL} alt="QR code url" />
                    <p><a href={imageURL} download>Download</a> this QR code </p>
                    <p>Scan this QR code with our App only</p>
                </>
            )}
        </section>
    )
}

export default GenerateQR