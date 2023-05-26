import React from "react"
import './timeline.css'

function Timeline(props) {
  //const {first, last, links_arr} = props;

  return (
    <>
       <div class="timeline">

            <div class="timeline__component">
                <div class="timeline__date timeline__date--right">August 30, 2017</div>
            </div>
            <div class="timeline__middle">
                <div class="timeline__point"></div>
            </div>
            <div class="timeline__component">
                <h2 class="timeline__title">Published First Video</h2>
                <p class="timeline__paragraph">
                My first YouTube video was a tutorial on how to build a client-server sockets app in Java.
                </p>
            </div>

            <div class="timeline__component">
                <div class="timeline__date timeline__date--right">August 30, 2017</div>
            </div>
            <div class="timeline__middle">
                <div class="timeline__point"></div>
            </div>
            <div class="timeline__component ">
                <h2 class="timeline__title">Published First Video</h2>
                <p class="timeline__paragraph">
                My first YouTube video was a tutorial on how to build a client-server sockets app in Java.
                </p>
            </div>

            
            
        </div>
    </>
  );
}

export default Timeline;
