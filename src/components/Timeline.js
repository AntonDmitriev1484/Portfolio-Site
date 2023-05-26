import React from "react"
import './timeline.css'

function Timeline(props) {
  const {timeline_event_arr} = props;

  return (
    <>
       <div class="timeline">

            {timeline_event_arr}
                
        </div>
    </>
  );
}

export default Timeline;
