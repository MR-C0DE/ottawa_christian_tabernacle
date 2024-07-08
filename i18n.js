// i18n.js
import i18n from "i18next";
import {
  initReactI18next
} from "react-i18next";
import translate from "./public/locales/translate";





i18n
  .use(initReactI18next) // initialise react-i18next
  .init({
    resources: {
      en: {
        translation: translate.english,
      },
      fr: {
        translation: translate.francais,
      },
    },
    lng: "en", // langue par défaut
    fallbackLng: "en", // langue de secours
    interpolation: {
      escapeValue: false, // évite l'échappement des caractères HTML dans les traductions
    },
  });

export default i18n;