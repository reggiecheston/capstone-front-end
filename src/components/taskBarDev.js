
import "../css/userViews.css";
import React, { useEffect } from 'react';
import CollapsibleComponent from './collapseDev';




const TaskBarDev = (props) => (
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

    <div className="col s12 m4">
      <div className="card grey darken-2">
        <div className="card-content white-text">
          <span className="card-title">{props.Head} <div className="right">{props.Count}</div></span>
          <CollapsibleComponent  
          Category= "Category"
          Priority= "Priority"
          Title= "Project Title"
          Summary= "Descriptionnn"
          Date= "12/12/2021"
          Staff= "Adrian Brown"/> 



        </div>
      </div>
    </div>
  </>
);




export default TaskBarDev;

