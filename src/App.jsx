import React from 'react'
import DataTable from "./DataTable";
import './App.css'

function App() {

  const inputData = [
    {
      "company Name": "abc",
      "Transaction Name": "def",
      "Document Number": "PO-ABC-123",
      Tag: "",
      "Invoice Status": "created",
      "Goods Status": "dispatched",
      "Related Process": "0",
      "Last Modified Date": new Date().toLocaleString() + "",
    },
    {
      "company Name": "abc",
      "Transaction Name": "def",
      "Document Number": "PO-ABC-123",
      Tag: "",
      "Invoice Status": "partiallyCreated",
      "Goods Status": "dispatched",
      "Related Process": "0",
      "Last Modified Date": new Date().toLocaleString() + "",
    },
    {
      "company Name": "abc",
      "Transaction Name": "def",
      "Document Number": "PO-ABC-123",
      Tag: "",
      "Invoice Status": "created",
      "Goods Status": "partiallyDispatched",
      "Related Process": "0",
      "Last Modified Date": new Date().toLocaleString() + "",
    },
    {
      "company Name": "abc",
      "Transaction Name": "def",
      "Document Number": "PO-ABC-123",
      Tag: "",
      "Invoice Status": "pending",
      "Goods Status": "notDispatched",
      "Related Process": "0",
      "Last Modified Date": new Date().toLocaleString() + "",
    },
    {
      "company Name": "abc",
      "Transaction Name": "def",
      "Document Number": "PO-ABC-123",
      Tag: "",
      "Invoice Status": "created",
      "Goods Status": "dispatched",
      "Related Process": "0",
      "Last Modified Date": new Date().toLocaleString() + "",
    },
    {
      "company Name": "abc",
      "Transaction Name": "def",
      "Document Number": "PO-ABC-123",
      Tag: "",
      "Invoice Status": "created",
      "Goods Status": "dispatched",
      "Related Process": "0",
      "Last Modified Date": new Date().toLocaleString() + "",
    },
    {
      "company Name": "abc",
      "Transaction Name": "def",
      "Document Number": "PO-ABC-123",
      Tag: "",
      "Invoice Status": "partiallyCreated",
      "Goods Status": "dispatched",
      "Related Process": "0",
      "Last Modified Date": new Date().toLocaleString() + "",
    },
    {
      "company Name": "abc",
      "Transaction Name": "def",
      "Document Number": "PO-ABC-123",
      Tag: "",
      "Invoice Status": "created",
      "Goods Status": "partiallyDispatched",
      "Related Process": "0",
      "Last Modified Date": new Date().toLocaleString() + "",
    },
    {
      "company Name": "abc",
      "Transaction Name": "def",
      "Document Number": "PO-ABC-123",
      Tag: "",
      "Invoice Status": "pending",
      "Goods Status": "notDispatched",
      "Related Process": "0",
      "Last Modified Date": new Date().toLocaleString() + "",
    },
    {
      "company Name": "abc",
      "Transaction Name": "def",
      "Document Number": "PO-ABC-123",
      Tag: "",
      "Invoice Status": "created",
      "Goods Status": "dispatched",
      "Related Process": "0",
      "Last Modified Date": new Date().toLocaleString() + "",
    },
    {
      "company Name": "abc",
      "Transaction Name": "def",
      "Document Number": "PO-ABC-123",
      Tag: "",
      "Invoice Status": "created",
      "Goods Status": "dispatched",
      "Related Process": "0",
      "Last Modified Date": new Date().toLocaleString() + "",
    },
    {
      "company Name": "abc",
      "Transaction Name": "def",
      "Document Number": "PO-ABC-123",
      Tag: "",
      "Invoice Status": "partiallyCreated",
      "Goods Status": "dispatched",
      "Related Process": "0",
      "Last Modified Date": new Date().toLocaleString() + "",
    },
    {
      "company Name": "abc",
      "Transaction Name": "def",
      "Document Number": "PO-ABC-123",
      Tag: "",
      "Invoice Status": "created",
      "Goods Status": "partiallyDispatched",
      "Related Process": "0",
      "Last Modified Date": new Date().toLocaleString() + "",
    },
    {
      "company Name": "abc",
      "Transaction Name": "def",
      "Document Number": "PO-ABC-123",
      Tag: "",
      "Invoice Status": "pending",
      "Goods Status": "notDispatched",
      "Related Process": "0",
      "Last Modified Date": new Date().toLocaleString() + "",
    },
    {
      "company Name": "abc",
      "Transaction Name": "def",
      "Document Number": "PO-ABC-123",
      Tag: "",
      "Invoice Status": "created",
      "Goods Status": "dispatched",
      "Related Process": "0",
      "Last Modified Date": new Date().toLocaleString() + "",
    },
  ];
  
  return (
    <>
    {/* <div className="text-red-500"> Sample Text</div> */}
      <DataTable inputData={inputData} hiddenColumns={[]} />
    </>
  )
}

export default App
