import React from 'react'
import './billFormat.css'


const Reciept = ({ document }) => {
    const [doc, setDoc] = React.useState(document);

    console.log(doc)
    return (
        <div className='a4sheet'>
            <div className='a4in'>
                <h1 className='heading1'>Receipt</h1>
                <div className='s1'>
                    <img src={doc?.images?.parentcompanylogo} alt='logo' />
                    <div className='s1in'>
                        <h1>{doc.userdata.companyname ? doc.userdata.companyname : '---'}</h1>
                        <p>{doc.userdata.address}</p>
                        <p>+91 {doc.userdata.phonenumber}, {doc.userdata.email}</p>
                        <p>GSTIN: {doc.userdata.gstin}</p>
                    </div>
                    <img src={doc.images.yourcompanylogo} alt='logo' />
                </div>
                <hr />
                <div className='s2'>
                    <div className='s2in'>
                        <div className='s2cont'>
                            <label>Client Name</label>
                            <p>{doc.doc.basicform.clientname}</p>
                        </div>
                        <div className='s2cont'>
                            <label>Receipt Number</label>
                            <p>{doc.doc.basicform.recieptnumber}</p>
                        </div>
                    </div>

                    <div className='s2in'>
                        <div className='s2cont'>
                            <label>Date</label>
                            <p>{doc.doc.basicform.date}</p>
                        </div>
                        <div className='s2cont'>
                            <label>Amount Recieved in Numbers</label>
                            <p>{doc.doc.basicform.amountrecievedinnumbers}</p>
                        </div>
                    </div>
                    <div className='s2in'>
                        <div className='s2cont'>
                            <label>Payment Type</label>
                            <p>{doc.doc.basicform.paymenttype}</p>
                        </div>
                        <div className='s2cont'>
                            <label>Amount Recieved in Words</label>
                            <p>{doc.doc.basicform.amountrecievedinwords}</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div>--</div>
                <div className='s1'>
                    <img src={doc.images.signature} alt='logo' />
                    <div className='s4'>
                        <label>Remarks</label>
                        <p>

                        </p>

                        <label>Terms & Conditions</label>
                        <p>
                            {doc.userdata.receiptterms}
                        </p>
                    </div>
                    <img src={doc.images.stamp} alt='logo' />
                </div>
                <p className='useruid'>{doc.userdata._id}</p>
            </div>
        </div >
    )
}

export default Reciept