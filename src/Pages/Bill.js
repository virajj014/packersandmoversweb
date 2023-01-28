import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Invoice from './BillTypes/Invoice';
import Lrbilty from './BillTypes/Lrbilty';
import PackingList from './BillTypes/PackingList';
import Quotation from './BillTypes/Quotation'
import Reciept from './BillTypes/Reciept';
// import { PDFDownloadLink } from '@react-pdf/renderer';
import ReactToPrint from 'react-to-print';

// "proxy": "https://easy-gold-piranha-gear.cyclic.app/",
const Bill = () => {
  const { docid, userid, doctype } = useParams();
  // console.log(docid, userid, doctype)
  const [document, setDocument] = useState({})
  const [loading, setLoading] = useState(true)
  const getdocument = async () => {
    setLoading(true)
    fetch('https://dark-gold-lovebird-cuff.cyclic.app/getdocbyuseridanddocid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({ userid, docid, doctype })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setDocument(data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    docid && userid && doctype && getdocument()
  }, [])
  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print</button>}
        content={() => <Quotation document={document} />}
        documentTitle={document.docid}
        pageStyle="@page { size: A4 portrait; }"
        onAfterPrint={() => { console.log('after print') }}
      />
      {
        document.doctype === 'quotation' && <Quotation document={document} />
      }
      {
        document.doctype === 'invoice' && <Invoice document={document} />
      }
      {
        document.doctype === 'packinglist' && <PackingList document={document} />
      }
      {
        document.doctype === 'lrbilty' && <Lrbilty document={document} />
      }
      {
        document.doctype === 'reciept' && <Reciept document={document} />
      }
      {
        loading && <h1>Loading...</h1>
      }

    </div>
  )
}

export default Bill