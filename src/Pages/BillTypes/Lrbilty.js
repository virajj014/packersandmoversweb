import React from 'react'
import './billFormat.css'


const Lrbilty = ({ document }) => {
    console.log(document)
    const [doc, setDoc] = React.useState(document);


    const [getotal, setgetotal] = React.useState(0);
    const [gettotalpaid, settotalpaid] = React.useState(0);
    const [getgst, setgetgst] = React.useState(0);
    const [getigst, setgetigst] = React.useState(0);
    React.useEffect(() => {
        const costform = doc.doc.costform;
        const descriptionform = doc.doc.descriptionform;
        const total =
            (eval(descriptionform.householditemswtcharged) >= 0 ? eval(descriptionform.householditemswtcharged) : 0)
            + (eval(descriptionform.officeitemswtcharged) >= 0 ? eval(descriptionform.officeitemswtcharged) : 0)
            + (eval(descriptionform.industrialitemswtcharged) >= 0 ? eval(descriptionform.industrialitemswtcharged) : 0)
            + (eval(descriptionform.cartransportationwtcharged) >= 0 ? eval(descriptionform.cartransportationwtcharged) : 0)
            + (eval(descriptionform.biketransportationwtcharged) >= 0 ? eval(descriptionform.biketransportationwtcharged) : 0)
            + (eval(descriptionform.asperlistattachedwtcharged) >= 0 ? eval(descriptionform.asperlistattachedwtcharged) : 0)
            + (eval(costform.packingchargerate) >= 0 ? eval(costform.packingchargerate) : 0)
            + (eval(costform.unpackingchargerate) >= 0 ? eval(costform.unpackingchargerate) : 0)
            + (eval(costform.loadingchargerate) >= 0 ? eval(costform.loadingchargerate) : 0)
            + (eval(costform.unloadingchargerate) >= 0 ? eval(costform.unloadingchargerate) : 0)
            + (eval(costform.freightchargesrate) >= 0 ? eval(costform.freightchargesrate) : 0)
            + (eval(costform.grchargerate) >= 0 ? eval(costform.grchargerate) : 0)
            + (eval(costform.insurancechargessrate) >= 0 ? eval(costform.insurancechargessrate) : 0)
            + (eval(costform.discount) >= 0 ? eval(costform.discount) : 0)


        const tgst = total * (costform.gst / 100) + total * (costform.igst / 100)
        // console.log(tgst)
        const total1 = parseFloat(total) + parseFloat(tgst)
        setgetotal(total1)

        const totalpaid =
            (eval(costform.packingchargepaid) >= 0 ? eval(costform.packingchargepaid) : 0)
            + (eval(costform.unpackingchargepaid) >= 0 ? eval(costform.unpackingchargepaid) : 0)
            + (eval(costform.loadingchargepaid) >= 0 ? eval(costform.loadingchargepaid) : 0)
            + (eval(costform.unloadingchargepaid) >= 0 ? eval(costform.unloadingchargepaid) : 0)
            + (eval(costform.freightchargespaid) >= 0 ? eval(costform.freightchargespaid) : 0)
            + (eval(costform.grchargepaid) >= 0 ? eval(costform.grchargepaid) : 0)
            + (eval(costform.insurancechargesspaid) >= 0 ? eval(costform.insurancechargesspaid) : 0)

        settotalpaid(totalpaid)
        const gst = total * (costform.gst / 100)
        const igst = total * (costform.igst / 100)
        setgetgst(gst)
        setgetigst(igst)
    }, [doc])


    return (
        <div className='a4sheet'>
            <div className='a4in'>
                <h1 className='heading1'>LR Bilty</h1>
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
                <div className='hr'></div>
                <div className='s2'>
                    <div className='s2in'>
                        <div className='s2cont'>
                            <label>Consignor Name</label>
                            <p>{doc.doc.basicform.consignorname
                                ? doc.doc.basicform.consignorname
                                : '-'}</p>
                        </div>

                        <div className='s2cont'>
                            <label>Bilty Number</label>
                            <p>{doc.doc.basicform.biltynumber
                                ? doc.doc.basicform.biltynumber
                                : '-'}</p>
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

                        <div className='s2cont'>
                            <label>Lorry Number</label>
                            <p>{doc.doc.basicform.lorrynumber ? doc.doc.basicform.lorrynumber : '-'}</p>
                        </div>
                    </div>

                    <div className='s2in'>
                        <div className='s2cont'>
                            <label>Move From</label>
                            <p>{doc.doc.basicform.addressfrom ? doc.doc.basicform.addressfrom : '-'}</p>
                        </div>

                        <div className='s2cont'>
                            <label>Move To</label>
                            <p>{doc.doc.basicform.addressto ? doc.doc.basicform.addressto : '-'}</p>
                        </div>
                    </div>
                </div>
                <div className='hr'></div>
                <div className='descriptionform'>
                    <div className='descriptionformin'>
                        <label>Description</label>
                        <div className='descriptionformin1'>
                            <p>weight</p>
                            <p>actual</p>
                        </div>
                    </div>
                    <div className='descriptionformin'>
                        <label>House Hold Items</label>
                        <div className='descriptionformin1'>
                            <p>{doc.doc.descriptionform.householditemswtactual ? doc.doc.descriptionform.householditemswtactual : '-'}</p>
                            <p>{doc.doc.descriptionform.householditemswtcharged ? doc.doc.descriptionform.householditemswtactual : '-'}</p>
                        </div>
                    </div>

                    <div className='descriptionformin'>
                        <label>Office Items</label>
                        <div className='descriptionformin1'>
                            <p>{doc.doc.descriptionform.officeitemswtactual ? doc.doc.descriptionform.officeitemswtactual : '-'}</p>
                            <p>{doc.doc.descriptionform.officeitemswtcharged ? doc.doc.descriptionform.officeitemswtcharged : '-'}</p>
                        </div>
                    </div>

                    <div className='descriptionformin'>
                        <label>Indusrtial Items</label>
                        <div className='descriptionformin1'>
                            <p>{doc.doc.descriptionform.industrialitemswtactual ? doc.doc.descriptionform.industrialitemswtactual : '-'}</p>
                            <p>{doc.doc.descriptionform.industrialitemswtcharged ? doc.doc.descriptionform.industrialitemswtcharged : '-'}</p>
                        </div>
                    </div>

                    <div className='descriptionformin'>
                        <label>Car Transportation</label>
                        <div className='descriptionformin1'>
                            <p>{doc.doc.descriptionform.cartransportationwtactual ? doc.doc.descriptionform.cartransportationwtactual : '-'}</p>
                            <p>{doc.doc.descriptionform.cartransportationwtcharged ? doc.doc.descriptionform.cartransportationwtcharged : '-'}</p>
                        </div>
                    </div>

                    <div className='descriptionformin'>
                        <label>Bike Transportation</label>
                        <div className='descriptionformin1'>
                            <p>{doc.doc.descriptionform.biketransportationwtactual ? doc.doc.descriptionform.biketransportationwtactual : '-'}</p>
                            <p>{doc.doc.descriptionform.biketransportationwtcharged ? doc.doc.descriptionform.biketransportationwtcharged : '-'}</p>
                        </div>
                    </div>

                    <div className='descriptionformin'>
                        <label>Asper List Attached</label>
                        <div className='descriptionformin1'>
                            <p>{doc.doc.descriptionform.asperlistattachedwtactual ? doc.doc.descriptionform.asperlistattachedwtactual : '-'}</p>
                            <p>{doc.doc.descriptionform.asperlistattachedwtcharged ? doc.doc.descriptionform.asperlistattachedwtcharged : '-'}</p>
                        </div>
                    </div>
                </div>

                <div className='lrcostform'>
                    <div className='lrcostformin'>
                        <label>Charges</label>
                        <p>Rate</p>
                        <p>Paid</p>
                        <p>Remaining</p>
                    </div>
                    <div className='lrcostformin'>
                        <label>Freight Charges</label>
                        <p>{doc.doc.costform.freightchargesrate ? doc.doc.costform.freightchargesrate : '-'}</p>
                        <p>{doc.doc.costform.freightchargespaid
                            ? doc.doc.costform.freightchargespaid : '-'}</p>
                        <p>{doc.doc.costform.freightchargesrate - doc.doc.costform.freightchargespaid}</p>
                    </div>

                    <div className='lrcostformin'>
                        <label>GR Charges</label>
                        <p>{doc.doc.costform.grchargerate ? doc.doc.costform.grchargerate : '-'}</p>
                        <p>{doc.doc.costform.grchargepaid ? doc.doc.costform.grchargepaid : '-'}</p>
                        <p>{doc.doc.costform.grchargerate - doc.doc.costform.grchargepaid}</p>
                    </div>

                    <div className='lrcostformin'>
                        <label>Packing Charges</label>
                        <p>{doc.doc.costform.packingchargerate ? doc.doc.costform.packingchargerate : '-'}</p>
                        <p>{doc.doc.costform.packingchargepaid ? doc.doc.costform.packingchargepaid : '-'}</p>
                        <p>{doc.doc.costform.packingchargerate - doc.doc.costform.packingchargepaid}</p>
                    </div>

                    <div className='lrcostformin'>
                        <label>Unpacking Charges</label>
                        <p>{doc.doc.costform.unpackingchargerate ? doc.doc.costform.unpackingchargerate : '-'}</p>
                        <p>{doc.doc.costform.unpackingchargepaid ? doc.doc.costform.unpackingchargepaid : '-'}</p>
                        <p>{doc.doc.costform.unpackingchargerate - doc.doc.costform.unpackingchargepaid}</p>
                    </div>

                    <div className='lrcostformin'>
                        <label>Insurance Charges</label>
                        <p>{doc.doc.costform.insurancechargesrate ? doc.doc.costform.insurancechargesrate : '-'}</p>
                        <p>{doc.doc.costform.insurancechargespaid ? doc.doc.costform.insurancechargespaid : '-'}</p>
                        <p>{doc.doc.costform.insurancechargesrate - doc.doc.costform.insurancechargespaid}</p>
                    </div>

                    <div className='lrcostformin'>
                        <label>Loading Charges</label>
                        <p>{doc.doc.costform.loadingchargerate ? doc.doc.costform.loadingchargerate : '-'}</p>
                        <p>{doc.doc.costform.loadingchargepaid ? doc.doc.costform.loadingchargepaid : '-'}</p>
                        <p>{doc.doc.costform.loadingchargerate - doc.doc.costform.loadingchargepaid}</p>
                    </div>

                    <div className='lrcostformin'>
                        <label>Unloading Charges</label>
                        <p>{doc.doc.costform.unloadingchargerate ? doc.doc.costform.unloadingchargerate : '-'}</p>
                        <p>{doc.doc.costform.unloadingchargepaid ? doc.doc.costform.unloadingchargepaid : '-'}</p>
                        <p>{doc.doc.costform.unloadingchargerate - doc.doc.costform.unloadingchargepaid}</p>
                    </div>


                </div>

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
                            <p>Rs. {getotal}</p>
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

                      

                        <div className='s5in1'>
                            <label>Discount</label>
                            <p>Rs. {doc.doc.costform.discount}</p>
                        </div>

                        <div className='s5in1'>
                            <label>Amount Paid</label>
                            <p>Rs. {gettotalpaid}</p>
                        </div>

                        <div className='s5in1'>
                            <label>Total Amount</label>
                            <p>Rs. {getotal - doc.doc.costform.discount - gettotalpaid}</p>
                        </div>
                    </div>
                </div>

                <div className='s1'>
                    <img src={doc.images.signature} alt='logo' />
                    <div className='s4'>
                        <label>Remarks</label>
                        <p>
                           
                        </p>
                      
                        <label>Terms & Conditions</label>
                        <p>
                            {doc.userdata.lrbiltyterms}
                        </p>
                    </div>
                    <img src={doc.images.stamp} alt='logo' />
                </div>
                <p className='useruid'>{doc.userdata._id}</p>


            </div>
        </div>
    )
}

export default Lrbilty