import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { FetchContext } from "../contexts/FetchContext";
import "./Profile.css";

const Profile = () => {
  const { fetch } = useContext(FetchContext);
  const { language } = useContext(LanguageContext);
  return (
    <div className="profile-box">
      {language === "en" && (
        <div className="profile-language-box">
          <div className="profile-header-box">
            <h2>{fetch?.headers.profile.en}</h2>
          </div>

          <div className="profile-info-photo-aboutme-box">
            <div className="profile-header-info">
              <div className="profile-basic-info">
                <h3>{fetch?.headers.basicInfo.en}</h3>
              </div>
              <div className="profile-left-box">
                <div className="profile-label-value">
                  <div className="profile-label">
                    {fetch?.profile.labelsEn.birthday}
                  </div>
                  <div className="profile-value">{fetch?.profile.birthday}</div>
                </div>

                <div className="profile-label-value">
                  <div className="profile-label">
                    {fetch?.profile.labelsEn.residenceCity}
                  </div>
                  <div className="profile-value">
                    {fetch?.profile.residenceCity}
                  </div>
                </div>

                <div className="profile-label-value">
                  <div className="profile-label">
                    {fetch?.profile.labelsEn.educationalBackground}
                  </div>
                  <div className="profile-value">
                    {fetch?.profile.educationalBackground.en}
                  </div>
                </div>

                <div className="profile-label-value">
                  <div className="profile-label">
                    {fetch?.profile.labelsEn.preferredRole}
                  </div>
                  <div className="profile-value">
                    {fetch?.profile.preferredRole}
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-photo-in-profile">
              <img
                src={fetch?.profile.profilePhotoInProfile}
                alt="profile photo"
              />
            </div>
            <div className="about-me">
              <h3>{fetch?.headers.aboutMe.en}</h3>
              <p>{fetch?.profile.aboutMeFirstParagraph}</p>
              <p>{fetch?.profile.aboutMeSecondParagraph}</p>
            </div>
          </div>
        </div>
      )}

      {language === "tr" && (
        <div className="profile-language-box">
          <div className="profile-header-box">
            <h2>{fetch?.headers.profile.tr}</h2>
          </div>

          <div className="profile-info-photo-aboutme-box">
            <div className="profile-header-info">
              <div className="profile-basic-info">
                <h3>{fetch?.headers.basicInfo.tr}</h3>
              </div>
              <div className="profile-left-box">
                <div className="profile-label-value">
                  <div className="profile-label">
                    {fetch?.profile.labelsTr.birthday}
                  </div>
                  <div className="profile-value">{fetch?.profile.birthday}</div>
                </div>

                <div className="profile-label-value">
                  <div className="profile-label">
                    {fetch?.profile.labelsTr.residenceCity}
                  </div>
                  <div className="profile-value">
                    {fetch?.profile.residenceCity}
                  </div>
                </div>

                <div className="profile-label-value">
                  <div className="profile-label">
                    {fetch?.profile.labelsTr.educationalBackground}
                  </div>
                  <div className="profile-value">
                    {fetch?.profile.educationalBackground.tr}
                  </div>
                </div>

                <div className="profile-label-value">
                  <div className="profile-label">
                    {fetch?.profile.labelsTr.preferredRole}
                  </div>
                  <div className="profile-value">
                    {fetch?.profile.preferredRole}
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-photo-in-profile">
              <img
                src={fetch?.profile.profilePhotoInProfile}
                alt="profile photo"
              />
            </div>
            <div className="about-me">
              <h3>{fetch?.headers.aboutMe.tr}</h3>
              <p>{fetch?.profile.aboutMeFirstParagraph}</p>
              <p>{fetch?.profile.aboutMeSecondParagraph}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
