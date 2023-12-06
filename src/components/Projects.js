import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { FetchContext } from "../contexts/FetchContext";
import "./Projects.css";

const Projects = () => {
  const { fetch } = useContext(FetchContext);
  const { language } = useContext(LanguageContext);
  return (
    <div className="projects-box">
      {language === "en" && (
        <div className="projects-box-inner">
          <div className="projects-header-box">
            <h3>{fetch?.headers.projects.en}</h3>
          </div>
          <div className="project-item-box">
            {fetch?.projects.map((item, index) => {
              return (
                <div className="project-item" key={index}>
                  <img src={item.projectImg} alt="project" />
                  <div className="project-item-name-details">
                    <div className="project-item-name">{item.projectName}</div>
                    <div className="project-item-details">
                      {item.details.en}
                    </div>
                    <div className="project-item-tools">
                      {item.tools.map((tool, ind) => {
                        return (
                          <div className="project-tool-circle" key={ind}>
                            {tool}
                          </div>
                        );
                      })}
                    </div>
                    <div className="project-item-links">
                      {item.links.map((link, ind) => {
                        return (
                          <div key={ind} className="project-link">
                            {link.en}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {language === "tr" && (
        <div className="projects-box-inner">
          <div className="projects-header-box">
            <h3>{fetch?.headers.projects.tr}</h3>
          </div>
          <div className="project-item-box">
            {fetch?.projects.map((item, index) => {
              return (
                <div className="project-item" key={index}>
                  <img src={item.projectImg} alt="project" />
                  <div className="project-item-name-details">
                    <div className="project-item-name">{item.projectName}</div>
                    <div className="project-item-details">
                      {item.details.tr}
                    </div>
                    <div className="project-item-tools">
                      {item.tools.map((tool, ind) => {
                        return (
                          <div className="project-tool-circle" key={ind}>
                            {tool}
                          </div>
                        );
                      })}
                    </div>
                    <div className="project-item-links">
                      {item.links.map((link, ind) => {
                        return (
                          <div key={ind} className="project-link">
                            {link.tr}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default Projects;
