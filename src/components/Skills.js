import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import "./Skills.css";
import { FetchContext } from "../contexts/FetchContext";

const Skills = () => {
  const { fetch } = useContext(FetchContext);
  const { language } = useContext(LanguageContext);
  return (
    <div className="skills-box">
      {language === "en" && (
        <div className="skills-header">
          <h2>{fetch?.headers.skills.en}</h2>
        </div>
      )}
      {language === "tr" && (
        <div className="skills-header">
          <h2>{fetch?.headers.skills.tr}</h2>
        </div>
      )}
      <div className="skill-item-box">
        {fetch?.skills.map((item, index) => {
          return (
            <div className="skill-item" key={index}>
              <img src={item.img} alt="skills" />
              <div className="skill-item-name">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
