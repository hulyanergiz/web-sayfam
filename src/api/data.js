import { assets } from "../assets/assets";
export const data = {
  name: "almila",
  headers: {
    skills: { en: "Skills", tr: "Yetenekler" },
    profile: { en: "Profile", tr: "Profil" },
    basicInfo: { en: "Basic Information", tr: "Temel Bilgiler" },
    aboutMe: { en: "About Me", tr: "Hakkımda" },
    projects: { en: "Projects", tr: "Projeler" },
  },
  name: "almila",
  introduction: {
    en: "I am a Frontend Developer...",
    tr: "Ben Frontend Developerım",
  },
  description: {
    en: "..who likes to craft solid and scalable frontend products with great user experiences.",
    tr: "Harika kullanıcı deneyimlerine sahip sağlam ve ölçeklenebilir ön uç ürünleri oluşturmayı seven biriyim.",
  },
  profilePhotoHeader: assets.photos.profilePhotoHeader,
  socialsHeader: [
    {
      img: assets.socialsHeader.github,
      imgDark: assets.socialsHeader.githubDark,
      link: "https://github.com/",
    },
    {
      img: assets.socialsHeader.linkedin,
      imgDark: assets.socialsHeader.linkedinDark,
      link: "https://linkedin.com/",
    },
  ],
  skills: [
    { name: "JAVASCRIPT", img: assets.skills.javaScriptLogo },
    { name: "NODE", img: assets.skills.nodeLogo },
    { name: "REACT", img: assets.skills.reactLogo },
    { name: "VS CODE", img: assets.skills.visualStudioLogo },
    { name: "REDUX", img: assets.skills.reduxLogo },
    { name: "FIGMA", img: assets.skills.figmaLogo },
  ],
  profile: {
    labelsEn: {
      birthday: "Birthday",
      residenceCity: "Residence City",
      educationalBackground: "Educational Background",
      preferredRole: "Preferred Role",
    },
    labelsTr: {
      birthday: "Doğum Tarihi",
      residenceCity: "İkamet Şehri",
      educationalBackground: "Eğitim Durumu",
      preferredRole: "Tercih Ettiği Rol",
    },
    birthday: "24.03.1996",
    residenceCity: "Ankara",
    educationalBackground: {
      en: "Hacettepe Uni.,Biology,Bachelor Degree,2016",
      tr: "Hacettepe Ünv. Biyoloji Lisans,2016",
    },
    preferredRole: "Frontend,UI",
    profilePhotoInProfile: assets.photos.profilePhotoInProfile,
    aboutMeFirstParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
    aboutMeSecondParagraph:
      "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
  },

  projects: [
    {
      projectName: "Workintech",
      projectImg: assets.projects.workintech,
      details: {
        en: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        tr: "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal kurulum çerez eklentisi. Bu, vanilya JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu, kod ve temalarda her türlü özelleştirmeyi mümkün kılar.",
      },
      tools: ["react", "redux", "vercel"],
      links: [
        { en: "View Site", tr: "Ziyaret Et" },
        { en: "GitHub", tr: "Github" },
      ],
    },
    {
      projectName: "Journey",
      projectImg: assets.projects.journey,
      details: {
        en: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        tr: "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal kurulum çerez eklentisi. Bu, vanilya JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu, kod ve temalarda her türlü özelleştirmeyi mümkün kılar.",
      },
      tools: ["react", "redux", "vercel"],
      links: [
        { en: "View Site", tr: "Ziyaret Et" },
        { en: "GitHub", tr: "Github" },
      ],
    },
  ],
  footer: {
    sendMe: { en: "Send me a message!", tr: "Bana mesaj gönderin!" },
    question: {
      en: "Got a question or proposal, or just want to say hello? Go ahead.",
      tr: " Bir sorun veya önerin var mı, ya da sadece merhaba demek ister misin? Devam et.",
    },
    email: "almilasucode@gmail.com",
    socials: [
      { img: assets.socials.twitter },
      { img: assets.socials.codepen },
      { img: assets.socials.atsign },
      { img: assets.socials.instagram },
    ],
  },
};
