import React from 'react';
import { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/TextLayer.css';
export default function Pdf({ url, active = true, setActive = () => { } }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pdfLoaded, setPdfLoaded] = useState(false);
    const [loadingText, setLoadingText] = useState("")
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);

    }

    useEffect(() => {
        // 當頁面載入後1秒後，設置Pdf元件已經載入完成
        let count = 0
        let arr = ["", ".", "..", "..."]
        setInterval(() => {
            if (count + 1 == arr.length) {
                count = 0
            } else {
                count = count + 1
            }

            setLoadingText(arr[count])
        }, 250)
        setTimeout(() => {
            setPdfLoaded(true);
        }, 3500);
    }, []);
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", backgroundColor: "#fff", visibility: active == false ? "hidden" : "visible", opacity: active == false ? "0" : "1", transition: "0.5s", pointerEvents: "auto", position: "fixed", left: 0, top: 0, zIndex: 2, overflowY: 'hidden', height: '100vh' }} >
            {!pdfLoaded ? (
                <div style={{ fontSize: "1.6vw", fontWeight: "600" }}>Loading{loadingText}</div>
            ) : (
                <div className="main-pdf" onClick={() => { setActive(false) }} style={{ width: "100%", overflowY: 'scroll', height: '100vh' }}>
                    <Document
                        file={url}
                        onLoadSuccess={onDocumentLoadSuccess}

                    >
                        {[...Array(numPages)].map((_, index) => (

                            <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={2.5} />


                        ))}
                    </Document>
                </div>
            )}



        </div >
    );
}