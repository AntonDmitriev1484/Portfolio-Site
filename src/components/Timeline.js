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
                <div class="timeline__date timeline__date--right">8/2020 - 5/2022</div>
            </div>
            <div class="timeline__middle">
                <div class="timeline__point"></div>
            </div>
            <div class="timeline__component ">
                <h2 class="timeline__title">Teaching Assistant Lead, WashU Intro to CS</h2>
                <p class="timeline__paragraph">
                    Intro to CS is WashU's highest enrolled class, it hires roughly 50 TA's per semester.
                </p>
                 <ul>
                    <li>
                        Directed office hours and group learning sessions while also overseeing 30 teaching assistants as a section lead.
                    </li>
                    <li>
                        Graded and provided feedback on student work.
                    </li>
                    <li>
                        Assisted 300+ students in one on one help sessions.
                    </li>
                    
                    </ul>
            </div>

            
            
        </div>
    </>
  );
}

export default Timeline;
