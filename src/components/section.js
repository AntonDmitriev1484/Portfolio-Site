import React from "react";
import SectionBody from './sectionbody'

function Section(props) {
    const {title, body} = props;

    const bg_color = "bg-dark";

  return (
    <>
    <div className= "row mt-5 justify-content-evenly bg-dark-subtle">
        <div className="p-3 m-0">
            <b><h1>{title}</h1></b>
        </div>
        <SectionBody text="body here"/>
    </div>
    </>
  );
}

export default Section;
