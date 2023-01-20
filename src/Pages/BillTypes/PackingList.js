import React from 'react'
import './billFormat.css'

const PackingList = (document) => {
    // console.log(document)
    const [doc, setDoc] = React.useState(document.document);
    // console.log(doc.doc)


    
    return (
        <div className='a4sheet'>
            <div className='billHeader'>
                <div className='billHeaderLeft'>
                    <img src={doc.images.parentcompanylogo} alt='logo' />
                </div>
                <div className='billHeaderCenter'>Packing List ( {doc.doc.docid} )</div>
                <div className='billHeaderRight'>
                    <img src={doc.images.yourcompanylogo} alt='logo' />
                </div>
            </div>
            {/* client name , company , quotation number mobile email from to */}

            <div className='basics'>
                <div className='c1'>
                    <label>Client Name</label>
                    -
                    <p>{doc.doc.basicform.partyname}</p>
                </div>

                <div className='c1'>
                    <label>Date</label>-
                    <p>
                        {doc.doc.basicform.date}
                    </p>
                </div>

                <div className='c1'>
                    <label>Packing List Number</label>-
                    <p>
                        {doc.doc.basicform.plnumber}
                    </p>
                </div>

                <div className='c1'>
                    <label>Mobile</label>-
                    <p>
                        {doc.doc.basicform.mobilenumber}
                    </p>
                </div>


                <div className='c1'>
                    <label>Move From</label>-
                    <p>
                        {doc.doc.basicform.from}
                    </p>
                </div>

                <div className='c1'>
                    <label>Move To</label>-
                    <p>
                        {doc.doc.basicform.to}
                    </p>
                </div>
            </div>


            {/* packing ,unpacking , loading , unloading, truck size , pro fright charges , car transportation, handyman charges, escort charges , insurance charfes , remarks , fov transit policy, any other charges,
            tax type , gst , cgst ,sgst , Igst , total , discount , final amount , remarks*/}
            <div className='items'>
                {/* <div className='c2'>
                    <label>Packing Charges</label>
                    <p>Rs. {doc.doc.costform.packingcharge}</p>
                </div> */}
                {
                    doc.doc.items.map((item, index) => {
                        return (
                            <div className='c2' key={index}>
                                <label>{item.name}</label>
                                <p>Rs. {item.quantity}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div className='signatures'>
                <div className='c3'>
                    <label>Signature</label>
                    <img src={doc.images.signature} alt='signature' />
                </div>

                <div className='c3'>
                    <label>Stamp</label>
                    <img src={doc.images.stamp} alt='stamp' />
                </div>
            </div>
        </div>
    )
}

export default PackingList