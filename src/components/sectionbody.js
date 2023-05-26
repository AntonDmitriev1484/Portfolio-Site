import React from "react";

function SectionBody(props) {
    const {text} = props;
    
  return (
    <>
        <div className="p-3 m-0 border-0">
            <h5>{text}</h5>
        </div>
    </>
  );
}

export default SectionBody;
