import React from "react";
import SectionBody from './SectionBody'

function Section(props) {
    const {title, body} = props;

    const bg_color = "bg-dark";

  return (
    <>
    <div className= "row mt-5 justify-content-evenly bg-dark-subtle">
        <div className="px-3 pt-3 pb-1 m-0">
            <b><h1>{title}</h1></b>
        </div>
        <div className="px-3 pb-3 m-0 border-0">
          {body}
        </div>
    </div>
    </>
  );
}

export default Section;
