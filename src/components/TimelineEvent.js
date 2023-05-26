import React from "react"
import './timeline.css'

function TimelineEvent(props) {
  const {start_date, end_date, title, place, body} = props;

  return (
    <>
            <div class="timeline__component">
                <div class="timeline__date timeline__date--right">{start_date} - {end_date}</div>
            </div>
            <div class="timeline__middle">
                <div class="timeline__point"></div>
            </div>
            <div class="timeline__component ">
                <h2 class="timeline__title">{title}</h2>

                {body}


            </div>

    </>
  );
}

export default TimelineEvent;
