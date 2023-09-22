import React from 'react'
import Pdf from '../pdf/Pdf'
import { useNavigate } from 'react-router-dom';
export default function Information() {
    const navigate = useNavigate();
    return (
        <section className="information" onClick={() => navigate(-1)}>
            <Pdf url={"../../../ClassyHome_linkouCase.pdf"} />
        </section>
    )
}
