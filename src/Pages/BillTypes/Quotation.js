import React from 'react'
import './billFormat.css'
// http://localhost:3000/bill/63aa05847bab0845931b3780/quotation/Q-1
const Quotation = (document) => {
    // console.log(document)
    const [doc, setDoc] = React.useState(document.document);
    // console.log(doc.doc)
    const [getotal, setgetotal] = React.useState(0);
    const [getfinaltotal, setgetfinaltotal] = React.useState(0);
    const [getgst, setgetgst] = React.useState(0);
    const [getigst, setgetigst] = React.useState(0);

    React.useEffect(() => {
        const costform = doc.doc.costform;
        const total =
            (eval(costform.packingcharge) >= 0 ? eval(costform.packingcharge) : 0)
            + (eval(costform.unpackingcharge) >= 0 ? eval(costform.unpackingcharge) : 0)
            + (eval(costform.loadingcharge) >= 0 ? eval(costform.loadingcharge) : 0)
            + (eval(costform.unloadingcharge) >= 0 ? eval(costform.unloadingcharge) : 0)
            + (eval(costform.profright) >= 0 ? eval(costform.profright) : 0)
            + (eval(costform.cartransport) >= 0 ? eval(costform.cartransport) : 0)
            + (eval(costform.handymancharges) >= 0 ? eval(costform.handymancharges) : 0)
            + (eval(costform.escortcharges) >= 0 ? eval(costform.escortcharges) : 0)
            + (eval(costform.insurancecharges) >= 0 ? eval(costform.insurancecharges) : 0)
            + (eval(costform.anyothercharges) >= 0 ? eval(costform.anyothercharges) : 0)

        const tgst = total * (costform.gst / 100) + total * (costform.igst / 100)
        // console.log(tgst)
        const total1 = parseFloat(total) + parseFloat(tgst)


        setgetotal(total1)
        setgetfinaltotal(total1 - costform.discount)
        const gst = total * (costform.gst / 100)
        const igst = total * (costform.igst / 100)
        setgetgst(gst)
        setgetigst(igst)
    }, [doc])
    return (
        <div className='a4sheet'>
            <div className='a4in'>
                <h1 className='heading1'>Quotation</h1>
                {/* <div className='vr'></div> */}
                <div className='s1'>
                    <img src={doc?.images?.parentcompanylogo} alt='logo' />
                    <div className='s1in'>
                        <h1>{doc.doc.basicform.companyname ? doc.doc.basicform.companyname : '---'}</h1>
                        <p>{doc.userdata.address}</p>
                        <p>+91 {doc.userdata.phonenumber}, {doc.userdata.email}</p>
                        <p>GSTIN: {doc.userdata.gstin}</p>
                    </div>
                    <img src={doc.images.yourcompanylogo} alt='logo' />
                </div>
                <div className='hr'></div>
                <div className='hr'></div>
                <div className='s2'>
                    <div className='s2in'>
                        <div className='s2cont'>
                            <label>To</label>
                            <p>{doc.doc.basicform.clientname ? doc.doc.basicform.clientname : '-'}</p>
                        </div>

                        <div className='s2cont'>
                            <label>Quotation Number</label>
                            <p>{doc.doc.basicform.quotationumber ? doc.doc.basicform.quotationumber : '-'}</p>
                        </div>
                    </div>

                    <div className='s2in'>
                        <div className='s2cont'>
                            <label>Mobile</label>
                            <p>{doc.doc.basicform.mobile ? doc.doc.basicform.mobile : '-'}</p>
                        </div>

                        <div className='s2cont'>
                            <label>Date</label>
                            {
                                doc.doc.basicform.updatedDate ?
                                    <p>{new Date(doc.doc.updatedDate).getDate()}-{new Date(doc.doc.updatedDate).getMonth() + 1}-
                                        {new Date(doc.doc.updatedDate).getFullYear()}
                                    </p>
                                    :
                                    <p>
                                        {new Date(doc.doc.createdDate).getDate()}-{new Date(doc.doc.createdDate).getMonth() + 1}-
                                        {new Date(doc.doc.createdDate).getFullYear()}
                                    </p>
                            }
                        </div>
                    </div>

                    <div className='s2in'>
                        <div className='s2cont'>
                            <label>Email</label>
                            <p>{doc.doc.basicform.email ? doc.doc.basicform.email : '-'}</p>
                        </div>
                    </div>

                    <div className='s2in'>
                        <div className='s2cont'>
                            <label>Move From</label>
                            <p>{doc.doc.basicform.from ? doc.doc.basicform.from : '-'}</p>
                        </div>

                        <div className='s2cont'>
                            <label>Move To</label>
                            <p>{doc.doc.basicform.to ? doc.doc.basicform.to : '-'}</p>
                        </div>
                    </div>
                </div>
                <div className='hr'></div>
                <div className='hr'></div>
                <div className='s3'>
                    <h1 className='heading2'>1. Packing Support</h1>
                    <div className='s3in'>
                        <label>Packing Charges (With Men and Materials)</label>
                        <p>Rs. {doc.doc.costform.packingcharge ? doc.doc.costform.packingcharge : '-'}</p>
                    </div>
                    <div className='s3in'>
                        <label>Loading Charges (floor)</label>
                        <p>Rs. {doc.doc.costform.loadingcharge ? doc.doc.costform.loadingcharge : '-'}</p>
                    </div>
                </div>

                <div className='s3'>
                    <h1 className='heading2'>2. Unpacking Support</h1>
                    <div className='s3in'>
                        <label>Unloading Charges (floor)</label>
                        <p>Rs. {doc.doc.costform.unloadingcharge ? doc.doc.costform.unloadingcharge : '-'}</p>
                    </div>
                    <div className='s3in'>
                        <label>Unpacking Charges (floor)</label>
                        <p>Rs. {doc.doc.costform.unpackingcharge ? doc.doc.costform.unpackingcharge : '-'}</p>
                    </div>
                </div>

                <div className='s3'>
                    <h1 className='heading2'>3. Freight</h1>
                    <div className='s3in'>
                        <label>Freight Charges</label>
                        <p>Rs. {doc.doc.costform.profright ? doc.doc.costform.profright : '-'}</p>
                    </div>
                </div>

                <div className='s3'>
                    <h1 className='heading2'>4. Insurance</h1>
                    <div className='s3in'>
                        <label>Insurance Charges</label>
                        <p>Rs. {doc.doc.costform.insurancecharges
                            ? doc.doc.costform.insurancecharges
                            : '-'}</p>
                    </div>
                </div>

                <div className='s3'>
                    <div className='s3in1'>
                        <h1 className='heading2'>5. FOV/ Transit Policy (of declared value of goods) Not
                            applicable, </h1>
                        <p>Rs. {
                            doc.doc.costform.fovtransitpolicy ? doc.doc.costform.fovtransitpolicy : '-'
                        }</p>
                    </div>
                </div>

                <div className='hr'></div>
                <div className='s4'>
                    <label>Remarks</label>
                    <p>
                        Remark 1 : {doc.doc.costform.remarks1 ? doc.doc.costform.remarks1 : '-'}
                    </p>
                    <p>
                        Remark 2 : {doc.doc.costform.remarks2 ? doc.doc.costform.remarks2 : '-'}
                    </p>
                    <label>Terms & Conditions</label>
                    <p>
                        {doc.userdata.quotationterms}
                    </p>
                </div>
                <div className='hr'></div>
                <div className='s5'>
                    <div className='s5in'>
                        <label>Bank Details</label>
                        <p>Account Number: {doc.userdata.accountnumber}</p>
                        <p>Bank Name: {doc.userdata.bankname}</p>
                        <p>Branch: {doc.userdata.branch}</p>
                        <p>IFSC Code: {doc.userdata.ifsc}</p>
                    </div>
                    <div className='vr'></div>
                    <div className='s5in11'>
                        <div className='s5in1'>
                            <label>Total Taxable Amount</label>
                            <p>{getotal}</p>
                        </div>
                        <div className='s5in1'>
                            <label>CGST ( {
                                doc.doc.costform.gst ? doc.doc.costform.gst / 2 : '0'
                            }% )</label>

                            <p>Rs. {getgst ? getgst / 2 : '0'}</p>
                        </div>

                        <div className='s5in1'>
                            <label>SGST ( {
                                doc.doc.costform.gst ? doc.doc.costform.gst / 2 : '0'
                            }% )</label>
                            <p>Rs. {getgst ? getgst / 2 : '0'}</p>
                        </div>

                        <div className='s5in1'>
                            <label>IGST ( {
                                doc.doc.costform.igst ? doc.doc.costform.igst : '0'
                            }% )</label>

                            <p>Rs. {getigst ? getigst : '0'}</p>
                        </div>
                    </div>
                </div>

                <div className='s1'>
                    <img src={doc.images.signature} alt='logo' />
                    <img src={doc.images.stamp} alt='logo' />
                </div>


                <p className='useruid'>{doc.userdata._id}</p>
            </div>


        </div>
    )
}

export default Quotation