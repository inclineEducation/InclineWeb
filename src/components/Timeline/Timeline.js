import "./Timeline.css";
import timelineElements from "./data";
import Lightbulb from '../../images/lightbulb.svg'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  let IconStyles = { background: "#06D6A0" };
  return (
    <div>
      <h1 className="title">Timeline of Program</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {

          return (
            <VerticalTimelineElement
              key={element.key}
              icon= {Lightbulb}
              iconStyle={IconStyles}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;