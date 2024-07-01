// import React from 'react'
// import DataTable from "./DataTable";
// import './App.css'

// function App() {

//   const inputData = [
//     {
//       "company Name": "ponraj",
//       "Transaction Name": "def",
//       "Document Number": "PO-ABC-123",
//       Tag: "",
//       "Invoice Status": "created",
//       "Goods Status": "dispatched",
//       "Related Process": "0",
//       "Last Modified Date": new Date().toLocaleString() + "",
//     },
//     {
//       "company Name": "ramesh",
//       "Transaction Name": "def",
//       "Document Number": "PO-ABC-123",
//       Tag: "",
//       "Invoice Status": "partiallyCreated",
//       "Goods Status": "dispatched",
//       "Related Process": "0",
//       "Last Modified Date": new Date().toLocaleString() + "",
//     },
//     {
//       "company Name": "abc",
//       "Transaction Name": "def",
//       "Document Number": "PO-ABC-123",
//       Tag: "",
//       "Invoice Status": "created",
//       "Goods Status": "partiallyDispatched",
//       "Related Process": "0",
//       "Last Modified Date": new Date().toLocaleString() + "",
//     },
//     {
//       "company Name": "abc",
//       "Transaction Name": "def",
//       "Document Number": "PO-ABC-123",
//       Tag: "",
//       "Invoice Status": "pending",
//       "Goods Status": "notDispatched",
//       "Related Process": "0",
//       "Last Modified Date": new Date().toLocaleString() + "",
//     },
//     {
//       "company Name": "abc",
//       "Transaction Name": "def",
//       "Document Number": "PO-ABC-123",
//       Tag: "",
//       "Invoice Status": "created",
//       "Goods Status": "dispatched",
//       "Related Process": "0",
//       "Last Modified Date": new Date().toLocaleString() + "",
//     },
//     {
//       "company Name": "abc",
//       "Transaction Name": "def",
//       "Document Number": "PO-ABC-123",
//       Tag: "",
//       "Invoice Status": "created",
//       "Goods Status": "dispatched",
//       "Related Process": "0",
//       "Last Modified Date": new Date().toLocaleString() + "",
//     },
//     {
//       "company Name": "abc",
//       "Transaction Name": "def",
//       "Document Number": "PO-ABC-123",
//       Tag: "",
//       "Invoice Status": "partiallyCreated",
//       "Goods Status": "dispatched",
//       "Related Process": "0",
//       "Last Modified Date": new Date().toLocaleString() + "",
//     },
//     {
//       "company Name": "abc",
//       "Transaction Name": "def",
//       "Document Number": "PO-ABC-123",
//       Tag: "",
//       "Invoice Status": "created",
//       "Goods Status": "partiallyDispatched",
//       "Related Process": "0",
//       "Last Modified Date": new Date().toLocaleString() + "",
//     },
//     {
//       "company Name": "abc",
//       "Transaction Name": "def",
//       "Document Number": "PO-ABC-123",
//       Tag: "",
//       "Invoice Status": "pending",
//       "Goods Status": "notDispatched",
//       "Related Process": "0",
//       "Last Modified Date": new Date().toLocaleString() + "",
//     },
//     {
//       "company Name": "abc",
//       "Transaction Name": "def",
//       "Document Number": "PO-ABC-123",
//       Tag: "",
//       "Invoice Status": "created",
//       "Goods Status": "dispatched",
//       "Related Process": "0",
//       "Last Modified Date": new Date().toLocaleString() + "",
//     },
//     {
//       "company Name": "abc",
//       "Transaction Name": "def",
//       "Document Number": "PO-ABC-123",
//       Tag: "",
//       "Invoice Status": "created",
//       "Goods Status": "dispatched",
//       "Related Process": "0",
//       "Last Modified Date": new Date().toLocaleString() + "",
//     },
//     {
//       "company Name": "abc",
//       "Transaction Name": "def",
//       "Document Number": "PO-ABC-123",
//       Tag: "",
//       "Invoice Status": "partiallyCreated",
//       "Goods Status": "dispatched",
//       "Related Process": "0",
//       "Last Modified Date": new Date().toLocaleString() + "",
//     },
//     {
//       "company Name": "abc",
//       "Transaction Name": "def",
//       "Document Number": "PO-ABC-123",
//       Tag: "",
//       "Invoice Status": "created",
//       "Goods Status": "partiallyDispatched",
//       "Related Process": "0",
//       "Last Modified Date": new Date().toLocaleString() + "",
//     },
//     {
//       "company Name": "abc",
//       "Transaction Name": "def",
//       "Document Number": "PO-ABC-123",
//       Tag: "",
//       "Invoice Status": "pending",
//       "Goods Status": "notDispatched",
//       "Related Process": "0",
//       "Last Modified Date": new Date().toLocaleString() + "",
//     },
//     {
//       "company Name": "abc",
//       "Transaction Name": "def",
//       "Document Number": "PO-ABC-123",
//       Tag: "",
//       "Invoice Status": "created",
//       "Goods Status": "dispatched",
//       "Related Process": "0",
//       "Last Modified Date": new Date().toLocaleString() + "",
//     },
//   ];
  
//   return (
//     <>
//     {/* <div className="text-red-500"> Sample Text</div> */}
//       <DataTable inputData={inputData} hiddenColumns={[]} />
//     </>
//   )
// }

// import React, { useState } from 'react';
// import DataTable from './DataTable';

// const App = () => {
//   const [searchText, setSearchText] = useState('');
//   const handleSearch = (e) => setSearchText(e.target.value);

//   const columns = [
//     { field: 'company_Name', headerName: 'Company Name', checkboxSelection: true, editable: true },
//     { field: 'Transaction_Name', headerName: 'Transaction Name' },
//     { field: 'Document_Number', headerName: 'Document Number' },
//     { field: 'Tag', headerName: 'Tag' },
//     { field: 'Invoice_Status', headerName: 'Invoice Status' },
//     { field: 'Goods_Status', headerName: 'Goods Status' },
//     { field: 'Related_Process', headerName: 'Related Process' },
//     { field: 'Last_Modified_Date', headerName: 'Last Modified Date' },
//   ];

//   const data = [
//     { company_Name: 'ponraj', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'created', Goods_Status: 'dispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
//     { company_Name: 'ramesh', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'partiallyCreated', Goods_Status: 'dispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
//     { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'created', Goods_Status: 'partiallyDispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
//     { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'pending', Goods_Status: 'notDispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
//     { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'created', Goods_Status: 'dispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
//     { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'created', Goods_Status: 'dispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
//     { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'partiallyCreated', Goods_Status: 'dispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
//     { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'created', Goods_Status: 'partiallyDispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
//     { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'pending', Goods_Status: 'notDispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
//     { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'created', Goods_Status: 'dispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
//     { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'created', Goods_Status: 'dispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
//     { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'partiallyCreated', Goods_Status: 'dispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
//     { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'created', Goods_Status: 'partiallyDispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
//     { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'pending', Goods_Status: 'notDispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
//     { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'created', Goods_Status: 'dispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
//   ];

//   const filteredData = data.filter(item => 
//     item.company_Name.toLowerCase().includes(searchText.toLowerCase()) ||
//     item.Transaction_Name.toLowerCase().includes(searchText.toLowerCase()) ||
//     item.Document_Number.toLowerCase().includes(searchText.toLowerCase()) ||
//     item.Tag.toLowerCase().includes(searchText.toLowerCase()) ||
//     item.Invoice_Status.toLowerCase().includes(searchText.toLowerCase()) ||
//     item.Goods_Status.toLowerCase().includes(searchText.toLowerCase()) ||
//     item.Related_Process.toLowerCase().includes(searchText.toLowerCase()) ||
//     item.Last_Modified_Date.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto px-4">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold">Data Table</h2>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchText}
//           onChange={handleSearch}
//           className="p-2 border border-gray-300 rounded"
//         />
//       </div>
//       <DataTable
//         columns={columns}
//         data={filteredData}
//         pagination
//         highlightOnHover
//       />
//     </div>
//   );
// };

import React, { useState } from 'react';
import DataTable from './DataTable';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const handleSearch = (e) => setSearchText(e.target.value);

  const columns = [
    { field: 'company_Name', headerName: 'Company Name', checkboxSelection: false, editable: false },
    { field: 'Transaction_Name', headerName: 'Transaction Name' },
    { field: 'Document_Number', headerName: 'Document Number' },
    { field: 'Tag', headerName: 'Tag' },
    {
      field: 'Invoice_Status',
      headerName: 'Invoice Status',
      cellStyle: params => {
        switch (params.value) {
          case 'created':
            return { color: 'green',backgroundColor: '#BFF6C3',fontWeight: 'bold' };
          case 'partiallyCreated':
            return { color: 'orange',backgroundColor: 'lightyellow',fontWeight: 'bold'  };
          case 'pending':
            return { color: 'blue',backgroundColor: 'lightblue',fontWeight: 'bold'  };
          default:
            return null;
        }
      }
    },
    { field: 'Goods_Status', 
      headerName: 'Goods Status', 
      cellStyle: params => {
        switch (params.value) {
          case 'dispatched':
            return { color: 'green',backgroundColor: '#BFF6C3',fontWeight: 'bold'  };
          case 'partiallyDispatched':
            return { color: 'orange',backgroundColor: 'lightyellow',fontWeight: 'bold'  };
          case 'notDispatched':
            return { color: 'red',backgroundColor: 'lightpink',fontWeight: 'bold'  };
          default:
            return null;
        }
      }
      },
    { field: 'Related_Process', headerName: 'Related Process' },
    { field: 'Last_Modified_Date', headerName: 'Last Modified Date' },
  ];

  const data = [
    { company_Name: 'ponraj', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'created', Goods_Status: 'dispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
    { company_Name: 'ramesh', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'partiallyCreated', Goods_Status: 'dispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
    { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'created', Goods_Status: 'partiallyDispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
    { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'pending', Goods_Status: 'notDispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
    { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'created', Goods_Status: 'dispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
    { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'created', Goods_Status: 'dispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
    { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'partiallyCreated', Goods_Status: 'dispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
    { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'created', Goods_Status: 'partiallyDispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
    { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'pending', Goods_Status: 'notDispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
    { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'created', Goods_Status: 'dispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
    { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'created', Goods_Status: 'dispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
    { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'partiallyCreated', Goods_Status: 'dispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
    { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'created', Goods_Status: 'partiallyDispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
    { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'pending', Goods_Status: 'notDispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
    { company_Name: 'abc', Transaction_Name: 'def', Document_Number: 'PO-ABC-123', Tag: '', Invoice_Status: 'created', Goods_Status: 'dispatched', Related_Process: '0', Last_Modified_Date: new Date().toLocaleString() },
  ];

  const filteredData = data.filter(item =>
    item.company_Name.toLowerCase().includes(searchText.toLowerCase()) ||
    item.Transaction_Name.toLowerCase().includes(searchText.toLowerCase()) ||
    item.Document_Number.toLowerCase().includes(searchText.toLowerCase()) ||
    item.Tag.toLowerCase().includes(searchText.toLowerCase()) ||
    item.Invoice_Status.toLowerCase().includes(searchText.toLowerCase()) ||
    item.Goods_Status.toLowerCase().includes(searchText.toLowerCase()) ||
    item.Related_Process.toLowerCase().includes(searchText.toLowerCase()) ||
    item.Last_Modified_Date.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Data Table</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
      />
    </div>
  );
};

export default App;


