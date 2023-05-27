import React from "react"
import { useRef } from 'react';

function TextImageRow(props) {

    const {text, imageHTMLelements} = props;

  //Should be styled to top
  //doesn't properly fit on laptop screen
  
  return (
    <>
      <div className="row">
        <div className="col">
          {text}
        </div>
        <div className="col">
          <div className=" d-grid gap-1 p-1">
            <div className="row">

                {/* {imageHTMLelements.map( x => (<div className="col"> {x} </div>))} */}
                <div className="col"> {imageHTMLelements} </div>
            </div>
            
          </div>
        </div>

      </div>

    </>
  );
}

export default TextImageRow;
