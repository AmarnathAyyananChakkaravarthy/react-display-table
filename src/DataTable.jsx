// import React from "react";
// import ReactPaginate from "react-paginate";

// import { Active, Inactive, Pending, Suspended } from "./StatusTags";

// export default function DataTable(props) {
//   const [displayCount, setDisplayCount] = React.useState(Number(5));
//   function DisplayItems({ currentItems }) {
//     return (
//       <div className="items w-full py-4 overflow-x-auto">
//         <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
//           <table className="min-w-full leading-normal overflow-x-scroll">
//             <thead>
//               <tr>
//                 {currentItems &&
//                   Object.keys(currentItems.at(0)).map(
//                     (keyValue, index) =>
//                       !props.hiddenColumns.includes(keyValue) && (
//                         <th
//                           key={index}
//                           className="px-5 py-3 sticky border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
//                         >
//                           {keyValue}
//                         </th>
//                       )
//                   )}
//               </tr>
//             </thead>
//             <tbody>
//               {currentItems &&
//                 currentItems.map((item, rowIndex) => (
//                   <a
//                     href="/"
//                     className="table-row w-screen *:hover:bg-gray-50"
//                     key={rowIndex}
//                   >
//                     {Object.entries(item).map(
//                       ([key, itemValue]) =>
//                         //console.log(key,":",itemValue);
//                         !props.hiddenColumns.includes(key) && (
//                           <td className=" px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                             {key === "Goods Status" ? (
//                               itemValue === "dispatched" ? (
//                                 <Active value={"Dispatched"} />
//                               ) : itemValue === "partiallyDispatched" ? (
//                                 <Suspended value={"Partially Dispatched"} />
//                               ) : (
//                                 <Inactive value={"Not Recieved"} />
//                               )
//                             ) : key === "Invoice Status" ? (
//                               itemValue === "created" ? (
//                                 <Active value={"Invoice Created"} />
//                               ) : itemValue === "partiallyCreated" ? (
//                                 <Suspended
//                                   value={"Invoice Partially Created"}
//                                 />
//                               ) : itemValue === "pending" ? (
//                                 <Pending value={"Invoice Pending"} />
//                               ) : (
//                                 <Inactive value={"Invoice Inactive"} />
//                               )
//                             ) : key === "Deal Status" ? (
//                               itemValue === "created" ? (
//                                 <Active value={"Created"} />
//                               ) : itemValue === "partiallyCreated" ? (
//                                 <Suspended value={"Partially Created"} />
//                               ) : itemValue === "pending" ? (
//                                 <Pending value={"Pending"} />
//                               ) : (
//                                 <Inactive value={"Inactive"} />
//                               )
//                             ) : (
//                               <p className="text-gray-900 whitespace-no-wrap">
//                                 {itemValue}
//                                 {/* {props.detailedViewLink ? (<Link to={props.detailedViewLink+ item.id} className="bg-white hover:bg-gray-100">{itemValue}</Link>):{itemValue}} */}
//                               </p>
//                             )}
//                           </td>
//                         )
//                     )}
//                   </a>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   }

//   function PaginatedItems({ itemsPerPage }) {
//     // We start with an empty list of items.
//     // Here we use item offsets; we could also use page offsets
//     // following the API or data you're working with.
//     const [pageCount, setPageCount] = React.useState(Number(0));
//     const [itemOffset, setItemOffset] = React.useState(Number(0));
//     const [currentItems, setCurrentItems] = React.useState(
//       props.inputData.slice(0, itemsPerPage)
//     );

//     React.useEffect(() => {
//       // Fetch items from another resources.
//       const endOffset = Number(itemOffset) + Number(itemsPerPage);
//       console.log(
//         `Loading items from ${itemOffset} to ${endOffset} ${currentItems.length}`
//       );
//       setCurrentItems(props.inputData.slice(itemOffset, endOffset));
//       setPageCount(Math.ceil(props.inputData.length / itemsPerPage));
//       console.log(":", pageCount, ":", currentItems.length);
//     }, [itemOffset]);
//     // Invoke when user click to request another page.
//     const handlePageClick = (event) => {
//       const newOffset =
//         (event.selected * itemsPerPage) % props.inputData.length;
//       console.log(
//         `User requested page number ${event.selected}, which is offset ${newOffset} : ${itemsPerPage}`
//       );
//       setItemOffset(newOffset);
//     };

//     return (
//       <>
//         <DisplayItems currentItems={currentItems} />
//         <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
//           <ReactPaginate
//             className="flex flex-wrap w-96 items-center rounded-lg justify-evenly "
//             nextLabel={
//               <button className="text-sm text-center border-l-2 border-gray-50 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded">
//                 Next &gt;
//               </button>
//               // "Next >"
//             }
//             onPageChange={handlePageClick}
//             pageRangeDisplayed={3}
//             marginPagesDisplayed={2}
//             pageCount={pageCount}
//             previousLabel={
//               <button className="text-sm text-center border-r-2 border-gray-50 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded">
//                 &lt; Prev
//               </button>
//               // "< Prev"
//             }
//             pageClassName="page-item hover:bg-gray-100 px-3 py-1 rounded"
//             pageLinkClassName="page-link w-full h-full block"
//             previousClassName="page-item"
//             previousLinkClassName="page-link"
//             nextClassName="page-item"
//             nextLinkClassName="page-link"
//             breakLabel="..."
//             breakClassName="page-item hover:bg-gray-100 px-3 py-1 rounded"
//             breakLinkClassName="page-link"
//             containerClassName="pagination"
//             activeClassName="active"
//             renderOnZeroPageCount={null}
//           />
//         </div>
//       </>
//     );
//   }
//   return (
//     <>
//       <div className="font-sans bg-gray-50">
//         <div className="container px-10 mx-auto">
//           <div className="py-8">
//             <div className="filters my-2 flex sm:flex-row flex-col">
//               <div className="flex flex-row mb-1 sm:mb-0">
//                 <div className="relative">
//                   <select className="appearance-none h-full rounded-l border-t sm:rounded-r-none sm:border-r-0 border-l border-r border-b block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
//                     <option>All</option>
//                     <option>Active</option>
//                     <option>Inactive</option>
//                   </select>
//                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                     <svg
//                       className="fill-current h-4 w-4"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                     </svg>
//                   </div>
//                 </div>
//                 <div className="relative">
//                   <select className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-l border-b block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
//                     <option>All</option>
//                     <option>Active</option>
//                     <option>Inactive</option>
//                   </select>
//                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                     <svg
//                       className="fill-current h-4 w-4"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//               <div className="block relative">
//                 <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
//                   <svg
//                     viewBox="0 0 24 24"
//                     className="h-4 w-4 fill-current text-gray-500"
//                   >
//                     <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
//                   </svg>
//                 </span>
//                 <input
//                   placeholder="Search"
//                   className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
//                 />
//               </div>
//             </div>

//             {/* <span className="text-xs xs:text-sm text-gray-900 border border-red-500"> */}
//             <PaginatedItems itemsPerPage={displayCount} />
//             {/* </span> */}

//             <div className="changeDisplayCount flex items-center justify-center mt-2 mb-10 xs:mt-0">
//               <span>Display</span>
//               <div className="relative">
//                 <select
//                   onChange={(e) => {
//                     setDisplayCount(e.target.value);
//                     setItemOffset(Number(0));
//                     setPageCount(Number(0));
//                   }}
//                   className="h-full border-b-2 appearance-none w-full bg-white text-gray-700  p-2  pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 >
//                   <option>5</option>
//                   <option>10</option>
//                   <option>20</option>
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 py-4 text-gray-700">
//                   <svg
//                     className="fill-current h-4 w-4"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                   </svg>
//                 </div>
//               </div>
//               <span>records per page</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* create quotation Response: [{"id":1,"buyerDetail":null,"supplierDetail":null,"totalBeforeTax":null,"totalTax":null,"grandTotal":null,"documentNumber":null,"documentDate":null,"amendment":null,"deliveryDate":null,"enquiryNumber":null,"enquiryDate":null,"paymentTerm":null,"store":null,"comments":null,"addedItems":[]},{"id":2,"buyerDetail":null,"supplierDetail":null,"totalBeforeTax":null,"totalTax":null,"grandTotal":null,"documentNumber":null,"documentDate":null,"amendment":null,"deliveryDate":null,"enquiryNumber":null,"enquiryDate":null,"paymentTerm":null,"store":null,"comments":null,"addedItems":[]},{"id":52,"buyerDetail":{"id":3,"Contact Person Name":"grt","Email":"grt@mail.com","Phone Number":"9887676556","Category":"Both","GST Number":"323454324324","GST Type":"Regular","Company Name":"GRT","Company Email":"grt@mail.com","Company Address Line1":"line1","Company Address Line2":"line2","Pincode":"732101","City":"CHN","State":"TN","Country":"IND","Company Reference Code":"dasd","Company Tags":"Tag2","Date Added":null},"supplierDetail":{"id":2,"Contact Person Name":"ABC","Email":"abc@abc.com","Phone Number":"921312301","Category":"Both","GST Number":"123241412121","GST Type":"Regular","Company Name":"ABC","Company Email":"abc@abc.com","Company Address Line1":"line1","Company Address Line2":"lin2","Pincode":"312321","City":"CHN","State":"TN","Country":"IND","Company Reference Code":"123","Company Tags":"Tag1","Date Added":null},"totalBeforeTax":3600.0,"totalTax":360.0,"grandTotal":3960.0,"documentNumber":"1","documentDate":"2024-06-04T00:00:00.000+00:00","amendment":0,"deliveryDate":"2024-06-05T00:00:00.000+00:00","enquiryNumber":0,"enquiryDate":"2024-06-05T00:00:00.000+00:00","paymentTerm":"FULL ADV","store":"ECC","comments":"NIL","addedItems":[{"Item ID":2,"Item Name":"daswq","Type":"Product","Category":"Both","Unit Of Measurement":"Kg","ItemCategory":"Finished Product","Current Stock":1,"Default Price":100.0,"HSN Code":"HSN2","Tax":10.0,"Minimum Stock Level":3,"Maximum Stock Level":10,"Created Date":"","ECN":"ECN2","POCKETS/REEL":1,"MTRS/REEL":2,"MPN":"MPN2"},{"Item ID":3,"Item Name":"wewq","Type":"Product","Category":"Both","Unit Of Measurement":"Kg","ItemCategory":"Spare Part","Current Stock":11,"Default Price":200.0,"HSN Code":"HSN3","Tax":10.0,"Minimum Stock Level":3,"Maximum Stock Level":10,"Created Date":"","ECN":"ECN3","POCKETS/REEL":2,"MTRS/REEL":3,"MPN":"MPN3"}]},{"id":53,"buyerDetail":{"id":3,"Contact Person Name":"grt","Email":"grt@mail.com","Phone Number":"9887676556","Category":"Both","GST Number":"323454324324","GST Type":"Regular","Company Name":"GRT","Company Email":"grt@mail.com","Company Address Line1":"line1","Company Address Line2":"line2","Pincode":"732101","City":"CHN","State":"TN","Country":"IND","Company Reference Code":"dasd","Company Tags":"Tag2","Date Added":null},"supplierDetail":{"id":2,"Contact Person Name":"ABC","Email":"abc@abc.com","Phone Number":"921312301","Category":"Both","GST Number":"123241412121","GST Type":"Regular","Company Name":"ABC","Company Email":"abc@abc.com","Company Address Line1":"line1","Company Address Line2":"lin2","Pincode":"312321","City":"CHN","State":"TN","Country":"IND","Company Reference Code":"123","Company Tags":"Tag1","Date Added":null},"totalBeforeTax":3300.0,"totalTax":356.0,"grandTotal":3656.0,"documentNumber":"2","documentDate":"2024-06-04T00:00:00.000+00:00","amendment":0,"deliveryDate":"2024-06-05T00:00:00.000+00:00","enquiryNumber":0,"enquiryDate":"2024-06-05T00:00:00.000+00:00","paymentTerm":"FULL ADV","store":"ECC2","comments":"NIL","addedItems":[{"Item ID":1,"Item Name":"abs","Type":"Product","Category":"Buy","Unit Of Measurement":"Kg","ItemCategory":"Raw Materials","Current Stock":7,"Default Price":100.0,"HSN Code":"IC11","Tax":10.0,"Minimum Stock Level":1,"Maximum Stock Level":20,"Created Date":"","ECN":"ECN1","POCKETS/REEL":1,"MTRS/REEL":1,"MPN":"MPN1"},{"Item ID":4,"Item Name":"asdq","Type":"Product","Category":"Buy","Unit Of Measurement":"Kg","ItemCategory":"Raw Materials","Current Stock":1,"Default Price":100.0,"HSN Code":"HSN4","Tax":12.0,"Minimum Stock Level":5,"Maximum Stock Level":20,"Created Date":"","ECN":"ECN4","POCKETS/REEL":1,"MTRS/REEL":3,"MPN":"MPN4"}]}] */}
//     </>
//   );
// }



import React, { useMemo } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ModuleRegistry } from '@ag-grid-community/core';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const DataTable = ({ columns, data, frameworkComponents }) => {
  const defaultColDef = useMemo(() => {
    return {
      filter: 'agTextColumnFilter',
      floatingFilter: true,
    };
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 650, width: 1600 }}>
      <AgGridReact
        rowData={data}
        columnDefs={columns}
        defaultColDef={defaultColDef}
        rowSelection="multiple"
        suppressRowClickSelection={true}
        pagination={true}
        paginationPageSize={10}
        frameworkComponents={frameworkComponents}
      />
    </div>
  );
};

export default DataTable;
