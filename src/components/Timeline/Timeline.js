import "./Timeline.css";
import timelineElements from "./data";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  
  return (
    <div>
      <h1 className="title">Timeline of Program</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {

          return (
            <VerticalTimelineElement
              key={element.key}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <h1 className="title"></h1>
    </div>
  );
}

export default Timeline;