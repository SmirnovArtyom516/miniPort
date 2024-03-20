import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
// import { motion } from "framer-motion";
import "./index.css";

import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../constants";

// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }: any) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        display: "flex",

        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={
        (
          <p
            style={{
              padding: "20px",
              position: "relative",
              bottom: "40px",
              whiteSpace: "nowrap",
            }}
            className="words"
          >
            {experience.date}
          </p>
        ) as any
      }
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: experience.company_name != "MOEX" ? "10px" : "5px",
          }}
        >
          <img
            style={{
              width: experience.company_name != "MOEX" ? "40px" : "100px",
            }}
            src={experience.icon}
            alt={experience.company_name}
          />
        </div>
      }
    >
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3 className="words">{experience.title}</h3>
          <p className="words" style={{ margin: 0 }}>
            {experience.company_name}
          </p>
        </div>
        <ul style={{ display: "flex", flexDirection: "column" }}>
          {experience.points.map((point: string, index: number) => (
            <li
              style={{
                margin: "10px",
                whiteSpace: "wrap",
                wordBreak: "break-word",
              }}
              className="words"
              key={`experience-point-${index}`}
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
