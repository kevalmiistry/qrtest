import GenerateQR from './GenerateQR'
import './main.css'
import ScanFile from './ScanFile'
import WebScan from './WebScan'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      {/* <Router> */}
      <main className="container">
        <GenerateQR />
        <ScanFile />
        <WebScan />
        {/* <Routes> */}
        {/* <Route path='/' element={<GenerateQR />} />
            <Route path='/upload' element={<ScanFile />} />
            <Route path='/webscan' element={<WebScan />} />
          </Routes> */}
      </main>
      {/* </Router> */}
    </>
  )
}

export default App
