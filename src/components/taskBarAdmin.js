import "../css/userViews.css";
import React, { useEffect } from 'react';
import CollapsibleComponent from './collapse';

var Title = "Title"

const props = {
  Head: "Head",
  Count: "Count",
  Category: "Category",
  Priority: "Priority",
  Title: "Title",
  Summary: "Description",
  Date: "Date",
  Developer: "Developer",
  Staff: "Staff"
 
}




 
export default function TaskBarAdmin() {
   
  return (

   
   
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css"
      />

      
      
   
      
    <div className="col s12 m3">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{props.Head} <div className="right">{props.Count}</div></span>
         
        <CollapsibleComponent></CollapsibleComponent>

          


        
        



    

        
      </div>
    </div>
  </div>
     
  
      
    </>
  );
}
