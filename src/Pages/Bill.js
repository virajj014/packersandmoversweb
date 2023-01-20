import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Invoice from './BillTypes/Invoice';
import Lrbilty from './BillTypes/Lrbilty';
import PackingList from './BillTypes/PackingList';
import Quotation from './BillTypes/Quotation'
import Reciept from './BillTypes/Reciept';

const Bill = () => {
  const { docid, userid, doctype } = useParams();
  // console.log(docid, userid,doctype)
  const [document, setDocument] = useState({})
  const [loading, setLoading] = useState(true)
  const getdocument = async () => {
    setLoading(true)
    fetch('/getdocbyuseridanddocid', {
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
    getdocument()
  }, [])
  return (
    <div>
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