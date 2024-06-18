
 import React from "react";

 const Active = (props) => {
   return (
     <>
       <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
         <span
           aria-hidden
           className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
         ></span>
         <span className="relative">{props.value}</span>
       </span>
     </>
   );
 };
 const Suspended = (props) => {
   return (
     <>
       <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
         <span
           aria-hidden
           className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
         ></span>
         <span className="relative">{props.value}</span>
       </span>
     </>
   );
 };
 const Inactive = (props) => {
   return (
     <>
       <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
         <span
           aria-hidden
           className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
         ></span>
         <span className="relative">{props.value}</span>
       </span>
     </>
   );
 };
 const Pending = (props) => {
   return (
     <>
       <span className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
         <span
           aria-hidden
           className="absolute inset-0 bg-blue-200 opacity-50 rounded-full"
         ></span>
         <span className="relative">{props.value}</span>
       </span>
     </>
   );
 };
 
 export { Active, Inactive, Suspended, Pending };