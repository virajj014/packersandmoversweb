import React from 'react'
import './billFormat.css'


const Reciept = ({ document }) => {
    const [doc, setDoc] = React.useState(document);

    console.log(doc.doc.basicform)
    return (
        <div className='a4sheet'>
            <div className='billHeader'>
                <div className='billHeaderLeft'>
                    <img src={doc.images.parentcompanylogo} alt='logo' />
                </div>
                <div className='billHeaderCenter'>Reciept ( {doc.doc.docid} )</div>
                <div className='billHeaderRight'>
                    <img src={doc.images.yourcompanylogo} alt='logo' />
                </div>
            </div>

            <div className='basics'>
                <div className='c2'>
                    <label>Client Name</label>
                    <p>{doc.doc.basicform.clientname}</p>
                </div>
            </div>
            <div className='basics'>
                <div className='c2'>
                    <label>Reciept Number</label>
                    <p>{doc.doc.basicform.recieptnumber}</p>
                </div>

            </div>
            <div className='basics'>

                <div className='c2'>
                    <label>Date</label>
                    <p>{doc.doc.basicform.date}</p>
                </div>
            </div>
            <div className='basics'>
                <div className='c2'>
                    <label>Amount Recieved in Numbers</label>
                    <p>{doc.doc.basicform.amountrecievedinnumbers}</p>
                </div>
            </div>
            <div className='basics'>
                <div className='c2'>
                    <label>Amount Recieved in Words</label>
                    <p>{doc.doc.basicform.amountrecievedinwords}</p>
                </div>
            </div>
            <div className='basics'>
                <div className='c2'>
                    <label>Payment Type</label>
                    <p>{doc.doc.basicform.paymenttype}</p>
                </div>
            </div>

            <div className='signatures1'>
                <div className='c3'>
                    <label>Signature</label>
                    <img src={doc.images.signature} alt='signature' />
                </div>

                <div className='c3'>
                    <label>Stamp</label>
                    <img src={doc.images.stamp} alt='stamp' />
                </div>
            </div>

        </div >
    )
}

export default Reciept