import "../css/userViews.css";
import React, { useEffect } from 'react';
import M from 'materialize-css';

const CollapsibleComponent = () => {
  useEffect(() => {
    // This code will be executed after the component mounts
    // and the DOM is ready
    var elems = document.querySelectorAll('.collapsible.expandable');
    var instances = M.Collapsible.init(elems, {accordion: false}); // You can pass options here if needed
  }, []); // Empty dependency array ensures that this effect runs only once after mounting

  return (
    <div>
     
   
      <ul class="collapsible expandable">
  <li>
    <div className="collapsible-header black-text">
      <i className="material-icons">filter_drama</i>First
    </div>




    <div className="collapsible-body black-text">
      <span>Lorem ipsum dolor sit amet.</span>
    </div>
  </li>


  <li>
    <div className="collapsible-header black-text">
      <i className="material-icons">place</i>Second
    </div>



    <div className="collapsible-body black-text">
      <span>Lorem ipsum dolor sit amet.</span>
    </div>
  </li>
  <li>
    <div className="collapsible-header black-text">
      <i className="material-icons">whatshot</i>Third
    </div>

    <div className="collapsible-body black-text">
      <span>Lorem ipsum dolor sit amet.</span>
    </div>
  </li>
</ul>
    </div>
  );
}


 
export default function TaskBarDev() {
   
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

      
      <main>
   
      
    <div className="col s12 m4">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Card Title</span>
       
        <CollapsibleComponent></CollapsibleComponent>

          


        
        






      </div>
    </div>
  </div>
      </main>
 
      
    </>
  );
}
