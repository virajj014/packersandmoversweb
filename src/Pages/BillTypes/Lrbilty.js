import React from 'react'
import './billFormat.css'


const Lrbilty = ({ document }) => {
    console.log(document.doc.descriptionform)
    const [doc, setDoc] = React.useState(document);


    const [getotal, setgetotal] = React.useState(0);
    const [gettotalpaid, settotalpaid] = React.useState(0);
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
            + (eval(costform.insurancechargesrate) >= 0 ? eval(costform.insurancechargesrate) : 0)
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
            + (eval(costform.insurancechargespaid) >= 0 ? eval(costform.insurancechargespaid) : 0)

        settotalpaid(totalpaid)
    }, [doc])


    return (
        <div className='a4sheet'>
            <div className='billHeader'>
                <div className='billHeaderLeft'>
                    <img src={doc.images.parentcompanylogo} alt='logo' />
                </div>
                <div className='billHeaderCenter'>Lr Bilty ( {doc.doc.docid} )</div>
                <div className='billHeaderRight'>
                    <img src={doc.images.yourcompanylogo} alt='logo' />
                </div>
            </div>

            <div className='basics'>
                <div className='c1'>
                    <label>Consignor Name</label>
                    -
                    <p>{doc.doc.basicform.consignorname}</p>
                </div>

                <div className='c1'>
                    <label>Date</label>-
                    <p>
                        {doc.doc.basicform.date}
                    </p>
                </div>

                <div className='c1'>
                    <label>Bilty Number</label>-
                    <p>
                        {doc.doc.basicform.biltynumber}
                    </p>
                </div>

                <div className='c1'>
                    <label>Lorry Number</label>-
                    <p>
                        {doc.doc.basicform.lorrynumber}
                    </p>
                </div>


                <div className='c1'>
                    <label>Move From</label>-
                    <p>
                        {doc.doc.basicform.addressfrom}
                    </p>
                </div>

                <div className='c1'>
                    <label>Move To</label>-
                    <p>
                        {doc.doc.basicform.addressto}
                    </p>
                </div>
            </div>


            <div className='lrcharges'>
                <div className='c2'>
                    <h3>Freight Charges</h3>
                    <div className='c2in'>
                        <div className='c2in1'>
                            <p>Freight Charges Rate</p>
                            <p>Rs. {doc.doc.costform.freightchargesrate}</p>
                        </div>

                        <div className='c2in1'>
                            <p>Freight Charges Paid</p>
                            <p>Rs. {doc.doc.costform.freightchargespaid}</p>
                        </div>

                        <div className='c2in1'>
                            <p>Freight Charges Due</p>
                            <p>Rs. {doc.doc.costform.freightchargesrate - doc.doc.costform.freightchargespaid}</p>
                        </div>
                    </div>
                </div>

                <div className='c2'>
                    <h3>Loading Charges</h3>
                    <div className='c2in'>
                        <div className='c2in1'>
                            <p>Loading Charges Rate</p>
                            <p>Rs. {doc.doc.costform.loadingchargerate}</p>
                        </div>

                        <div className='c2in1'>
                            <p>Loading Charges Paid</p>
                            <p>Rs. {doc.doc.costform.loadingchargepaid}</p>
                        </div>

                        <div className='c2in1'>
                            <p>Loading Charges Due</p>
                            <p>Rs. {doc.doc.costform.loadingchargerate - doc.doc.costform.loadingchargepaid}</p>
                        </div>
                    </div>
                </div>

                <div className='c2'>
                    <h3>Unloading Charges</h3>
                    <div className='c2in'>
                        <div className='c2in1'>
                            <p>Unloading Charges Rate</p>
                            <p>Rs. {doc.doc.costform.unloadingchargerate}</p>
                        </div>

                        <div className='c2in1'>
                            <p>Unloading Charges Paid</p>
                            <p>Rs. {doc.doc.costform.unloadingchargepaid}</p>
                        </div>

                        <div className='c2in1'>
                            <p>Unloading Charges Due</p>
                            <p>Rs. {doc.doc.costform.unloadingchargerate - doc.doc.costform.unloadingchargepaid}</p>
                        </div>
                    </div>
                </div>

                <div className='c2'>
                    <h3>GR Charges</h3>
                    <div className='c2in'>
                        <div className='c2in1'>
                            <p>GR Charges Rate</p>
                            <p>Rs. {doc.doc.costform.grchargerate}</p>
                        </div>

                        <div className='c2in1'>
                            <p>GR Charges Paid</p>
                            <p>Rs. {doc.doc.costform.grchargepaid}</p>
                        </div>

                        <div className='c2in1'>
                            <p>GR Charges Due</p>
                            <p>Rs. {doc.doc.costform.grchargerate - doc.doc.costform.grchargepaid}</p>
                        </div>
                    </div>
                </div>

                <div className='c2'>
                    <h3>Insurance Charges</h3>
                    <div className='c2in'>
                        <div className='c2in1'>
                            <p>Insurance Charges Rate</p>
                            <p>Rs. {doc.doc.costform.insurancechargesrate}</p>
                        </div>

                        <div className='c2in1'>
                            <p>Insurance Charges Paid</p>
                            <p>Rs. {doc.doc.costform.insurancechargespaid}</p>
                        </div>

                        <div className='c2in1'>
                            <p>Insurance Charges Due</p>
                            <p>Rs. {doc.doc.costform.insurancechargesrate - doc.doc.costform.insurancechargespaid}</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className='descriptionformlr'>
                <div className='c3'>
                    <div className='c3in'>
                        <p>As per list attached</p>
                        <p>{doc.doc.descriptionform.asperlistattached}</p>
                    </div>

                    <div className='c3in'>
                        <p>Weight</p>
                        <p>{doc.doc.descriptionform.asperlistattachedwtactual} KG</p>
                    </div>

                    <div className='c3in'>
                        <p>Charge</p>
                        <p>Rs. {doc.doc.descriptionform.asperlistattachedwtcharged}</p>
                    </div>
                </div>

                <div className='c3'>
                    <div className='c3in'>
                        <p>Bike Transportation</p>
                        <p>{doc.doc.descriptionform.biketransportation}</p>
                    </div>

                    <div className='c3in'>
                        <p>Weight</p>
                        <p>{doc.doc.descriptionform.biketransportationwtactual} KG</p>
                    </div>

                    <div className='c3in'>
                        <p>Charge</p>
                        <p>Rs. {doc.doc.descriptionform.biketransportationwtcharged}</p>
                    </div>
                </div>

                <div className='c3'>
                    <div className='c3in'>
                        <p>Car Transportation</p>
                        <p>{doc.doc.descriptionform.cartransportation}</p>
                    </div>

                    <div className='c3in'>
                        <p>Weight</p>
                        <p>{doc.doc.descriptionform.cartransportationwtactual} KG</p>
                    </div>

                    <div className='c3in'>
                        <p>Charge</p>
                        <p>Rs. {doc.doc.descriptionform.cartransportationwtcharged}</p>
                    </div>

                </div>

                <div className='c3'>
                    <div className='c3in'>
                        <p>Household Items</p>
                        <p>{doc.doc.descriptionform.householditems}</p>
                    </div>

                    <div className='c3in'>
                        <p>Weight</p>
                        <p>{doc.doc.descriptionform.householditemswtactual} KG</p>
                    </div>

                    <div className='c3in'>
                        <p>Charge</p>
                        <p>Rs. {doc.doc.descriptionform.householditemswtcharged}</p>
                    </div>
                </div>

                <div className='c3'>
                    <div className='c3in'>
                        <p>Industrial Items</p>
                        <p>{doc.doc.descriptionform.industrialitems}</p>
                    </div>

                    <div className='c3in'>
                        <p>Weight</p>
                        <p>{doc.doc.descriptionform.industrialitemswtactual} KG</p>
                    </div>

                    <div className='c3in'>
                        <p>Charge</p>
                        <p>Rs. {doc.doc.descriptionform.industrialitemswtcharged}</p>
                    </div>
                </div>

                <div className='c3'>
                    <div className='c3in'>
                        <p>Office Items</p>
                        <p>{doc.doc.descriptionform.officeitems}</p>
                    </div>

                    <div className='c3in'>
                        <p>Weight</p>
                        <p>{doc.doc.descriptionform.officeitemswtactual} KG</p>
                    </div>

                    <div className='c3in'>

                        <p>Charge</p>
                        <p>Rs. {doc.doc.descriptionform.officeitemswtcharged}</p>
                    </div>
                </div>
            </div>


            <div className='lrcharges'>
                <div className='c2'>
                    <h3>Total Charges</h3>
                    <div className='c2in'>
                        <div className='c2in1'>
                            <p>Total Charges </p>
                            <p>Rs. {getotal}</p>
                        </div>

                        <div className='c2in1'>
                            <p>Total Charges Paid</p>
                            <p>Rs. {gettotalpaid}</p>
                        </div>

                        <div className='c2in1'>
                            <p>Total Charges Due</p>
                            <p>Rs. {getotal - gettotalpaid}</p>
                        </div>
                    </div>

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

export default Lrbilty