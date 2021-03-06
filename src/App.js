import "./App.css";
import React from 'react';
import { ReactComponent as LtsIcon } from "./images/support.svg";
import { ReactComponent as StandardIcon } from "./images/coffee.svg";

import timelineElements from "./data/timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function App() {
  let ltsIconStyles = { background: "#06D6A0" };
  let standardIconStyles = { background: "#f9c74f" };

  return (
    <div>
      <a href="https://spaghetticodejungle.com/java-versions-and-features"><h1 className="title">Java Versions & Features</h1></a>
      <h2 className="abstract">Modern Java</h2>
      <VerticalTimeline>
        {timelineElements.map((element,index) => {
          let isLtsIcon = element.icon === "lts";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.releaseDate}
              dateClassName="date"
              iconStyle={isLtsIcon ? ltsIconStyles : standardIconStyles}
              icon={isLtsIcon ? <LtsIcon /> : <StandardIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.name}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.extra}
              </h5>
              <p id="description">{element.description}</p>
              {element.features.map((c, i) => (
      <div key={i}>
        <p><a href={c.website}>{c.featureName}</a></p>
      <p></p>
      </div>
    ))}
<p></p>
 <p></p>
 <p></p>
              {showButton && (
                <a
                  className={`button ${
                    isLtsIcon ? "ltsButton" : "standardButton"
                  }`}
                  href={element.website}
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default App;
