import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { FetchContext } from "../contexts/FetchContext";
import "./Footer.css";

const Footer = () => {
  const { fetch } = useContext(FetchContext);
  const { language } = useContext(LanguageContext);
  return (
    <div className="footer-box">
      {language === "en" && (
        <div className="footer-language-box">
          <div className="footer-send-me">{fetch?.footer.sendMe.en}</div>
          <div className="footer-questions">{fetch?.footer.question.en}</div>
          <div className="footer-email">{fetch?.footer.email}</div>
          <div className="footer-socials">
            {fetch?.footer.socials.map((social, index) => {
              return (
                <div key={index}>
                  <img src={social.img} alt="social" />
                </div>
              );
            })}
          </div>
        </div>
      )}
      {language === "tr" && (
        <div className="footer-language-box">
          <div className="footer-send-me">{fetch?.footer.sendMe.tr}</div>
          <div className="footer-questions">{fetch?.footer.question.tr}</div>
          <div className="footer-email">{fetch?.footer.email}</div>
          <div className="footer-socials">
            {fetch?.footer.socials.map((social, index) => {
              return (
                <div key={index}>
                  <img src={social.img} alt="social" />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default Footer;
