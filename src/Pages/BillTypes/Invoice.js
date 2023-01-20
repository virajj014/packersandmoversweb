import React from 'react'
import './billFormat.css'

const Invoice = (document) => {
    // console.log(document)
    const [doc, setDoc] = React.useState(document.document);
    // console.log(doc.doc)
    const [getotal, setgetotal] = React.useState(0);
    const [getfinaltotal, setgetfinaltotal] = React.useState(0);
  const [getremaining, setgetremaining] = React.useState(0);

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
        // + (eval(costform.fovtransitpolicy) >= 0 ? eval(costform.fovtransitpolicy) : 0)

        const tgst = total * (costform.gst / 100)  + total * (costform.igst / 100)
        // console.log(tgst)
        const total1 = parseFloat(total) + parseFloat(tgst)


        setgetotal(total1)
        setgetfinaltotal(total1 - costform.discount)
        setgetremaining(total1 - costform.discount - costform.advancepayment)
    }, [doc])
    return (
        <div className='a4sheet'>
            <div className='billHeader'>
                <div className='billHeaderLeft'>
                    <img src={doc.images.parentcompanylogo} alt='logo' />
                </div>
                <div className='billHeaderCenter'>Invoice ( {doc.doc.docid} )</div>
                <div className='billHeaderRight'>
                    <img src={doc.images.yourcompanylogo} alt='logo' />
                </div>
            </div>
            {/* client name , company , quotation number mobile email from to */}

            <div className='basics'>
                <div className='c1'>
                    <label>Client Name</label>
                    -
                    <p>{doc.doc.basicform.clientname}</p>
                </div>

                <div className='c1'>
                    <label>Company Name</label>-
                    <p>
                        {doc.doc.basicform.companyname}
                    </p>
                </div>

                <div className='c1'>
                    <label>Quotation Number</label>-
                    <p>
                        {doc.doc.basicform.invoiceumber}
                    </p>
                </div>

                <div className='c1'>
                    <label>Mobile</label>-
                    <p>
                        {doc.doc.basicform.mobile}
                    </p>
                </div>

                <div className='c1'>
                    <label>Email</label>-
                    <p>
                        {doc.doc.basicform.email}
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
            <div className='charges'>
                <div className='c2'>
                    <label>Packing Charges</label>
                    <p>Rs. {doc.doc.costform.packingcharge}</p>
                </div>

                <div className='c2'>
                    <label>Unpacking Charges</label>
                    <p>Rs. {doc.doc.costform.unpackingcharge}</p>
                </div>

                <div className='c2'>
                    <label>Loading Charges</label>
                    <p>Rs. {doc.doc.costform.loadingcharge}</p>
                </div>

                <div className='c2'>
                    <label>Unloading Charges</label>
                    <p>Rs. {doc.doc.costform.unloadingcharge}</p>
                </div>

                <div className='c2'>
                    <label>Truck Size</label>
                    <p>{doc.doc.costform.trucksize} Ft</p>
                </div>

                <div className='c2'>
                    <label>Pro Freight Charges</label>
                    <p>Rs. {doc.doc.costform.profright}</p>
                </div>

                <div className='c2'>
                    <label>Car Transportation</label>
                    <p>Rs. {doc.doc.costform.cartransportation}</p>
                </div>

                <div className='c2'>
                    <label>Handyman Charges</label>
                    <p>Rs. {doc.doc.costform.handymancharges}</p>
                </div>

                <div className='c2'>
                    <label>Escort Charges</label>
                    <p>Rs. {doc.doc.costform.escortcharges}</p>
                </div>

                <div className='c2'>
                    <label>Insurance Charges</label>
                    <p>Rs. {doc.doc.costform.insurancecharges}</p>
                </div>

                <div className='c2'>
                    <label>Remarks 1</label>
                    <p>{doc.doc.costform.remarks1}</p>
                </div>

                <div className='c2'>
                    <label>FOV Transit Policy</label>
                    <p>{doc.doc.costform.fovtransitpolicy}</p>
                </div>

                <div className='c2'>
                    <label>Any Other Charges</label>
                    <p>Rs. {doc.doc.costform.anyothercharges}</p>
                </div>


                <div className='c2'>
                    <label>Tax Type</label>
                    <p>{doc.doc.costform.taxtype == '1'? "Other State" : "Within State"}</p>
                </div>

                <div className='c2'>
                    <label>GST</label>
                    <p>{doc.doc.costform.gst} %</p>
                </div>

                <div className='c2'>
                    <label>CGST</label>
                    <p>{doc.doc.costform.gst / 2} %</p>
                    
                </div>

                <div className='c2'>
                    <label>SGST</label>
                    <p>{doc.doc.costform.gst / 2} %</p>

                </div>

                <div className='c2'>
                    <label>IGST</label>
                    <p>{doc.doc.costform.igst} %</p>
                </div>

                <div className='c2'>
                    <label>Total</label>
                    <p>Rs. {getotal}</p>
                </div>

                <div className='c2'>
                    <label>Discount</label>
                    <p>Rs. {doc.doc.costform.discount}</p>
                </div>

                <div className='c2'>
                    <label>Final Amount</label>
                    <p>Rs. {getfinaltotal}</p>
                </div>
                <div className='c2'>
                    <label>Advance Payment</label>
                    <p>Rs. {doc.doc.costform.advancepayment}</p>
                </div>
                <div className='c2'>
                    <label>Remaining Payment</label>
                    <p>Rs. {getremaining}</p>
                </div>
                <div className='c2'>
                    <label>Remarks 2</label>
                    <p>{doc.doc.costform.remarks2}</p>
                </div>
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

export default Invoice