import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";
import { FetchContext } from "../contexts/FetchContext";
import "./Header.css";

const Header = () => {
  const { fetch } = useContext(FetchContext);
  const { theme, toggleMode } = useContext(ThemeContext);
  const { language, languageChanger } = useContext(LanguageContext);

  return (
    <div>
      {language === "en" && (
        <div className="en-container">
          <div className="header">
            <div className="header-top">
              <div className="header-top-left">
                <h3>{fetch?.name}</h3>
              </div>
              <div className="header-top-right">
                <div className="language-options" onClick={languageChanger}>
                  <div className="language-options-language">TÜRKÇE</div>
                  <div className="language-options-language-rest">'YE GEÇ</div>
                </div>
                <div className="toggle-mode">
                  <div className="toggle-switch">
                    <label className="toggle-switch-label">
                      <input
                        className="toggle-switch-input"
                        type="checkbox"
                        onChange={toggleMode}
                        checked={theme === "dark"}
                      ></input>
                      <span className="toggle-switch-button"></span>
                    </label>
                  </div>
                  <div className="theme-options">
                    {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
                  </div>
                </div>
              </div>
            </div>
            <div className="header-intro-image">
              <div className="header-intro-box">
                <div className="header-introduction">
                  {fetch?.introduction.en}
                </div>
                <div className="header-description">
                  {fetch?.description.en}
                </div>
                <div className="header-socials">
                  {fetch?.socialsHeader.map((social, index) => {
                    return (
                      <div key={index}>
                        <a href={social.link}>
                          <img src={social.img} alt="social" />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="header-image">
                <img src={fetch?.profilePhotoHeader} alt="profile photo" />
              </div>
            </div>
          </div>
        </div>
      )}

      {language === "tr" && (
        <div className="tr-container">
          <div className="header">
            <div className="header-top">
              <div className="header-top-left">
                <h3>{fetch?.name}</h3>
              </div>
              <div className="header-top-right">
                <div className="language-options" onClick={languageChanger}>
                  <div className="language-options-language-rest">
                    SWITCH TO
                  </div>
                  <div className="language-options-language"> ENGLISH</div>
                </div>
                <div className="toggle-mode">
                  <div className="toggle-switch">
                    <label className="toggle-switch-label">
                      <input
                        className="toggle-switch-input"
                        type="checkbox"
                        onChange={toggleMode}
                        checked={theme === "dark"}
                      ></input>
                      <span className="toggle-switch-button"></span>
                    </label>
                  </div>
                  <div className="theme-options">
                    {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
                  </div>
                </div>
              </div>
            </div>
            <div className="header-intro-image">
              <div className="header-intro-box">
                <div className="header-introduction">
                  {fetch?.introduction.tr}
                </div>
                <div className="header-description">
                  {fetch?.description.tr}
                </div>
                <div className="header-socials">
                  {fetch?.socialsHeader.map((social, index) => {
                    return (
                      <div key={index}>
                        <a href={social.link}>
                          <img src={social.img} alt="social" />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="header-image">
                <img src={fetch?.profilePhotoHeader} alt="profile photo" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
