// i18n.js
import i18n from "i18next";
import {
  initReactI18next
} from "react-i18next";
import enTranslation from "/public/locales/en/common.json";
import frTranslation from "/public/locales/fr/common.json";
import enMenu from "/public/locales/en/menu.json";
import frMenu from "/public/locales/fr/menu.json";
import enContact from "/public/locales/en/contact.json";
import frContact from "/public/locales/fr/contact.json";
import enHome from "/public/locales/en/home.json";
import frHome from "/public/locales/fr/home.json";
import enFooter from "/public/locales/en/footer.json";
import frFooter from "/public/locales/fr/footer.json";
import enBanner from "./public/locales/en/banner.json";
import frBanner from "./public/locales/fr/banner.json";

const english = {
  ...enTranslation,
  ...enMenu,
  ...enContact,
  ...enHome,
  ...enFooter,
  ...enBanner
};
const francais = {
  ...frTranslation,
  ...frMenu,
  ...frContact,
  ...frHome,
  ...frFooter,
  ...frBanner
};


i18n
  .use(initReactI18next) // initialise react-i18next
  .init({
    resources: {
      en: {
        translation: english,
      },
      fr: {
        translation: francais,
      },
    },
    lng: "en", // langue par défaut
    fallbackLng: "en", // langue de secours
    interpolation: {
      escapeValue: false, // évite l'échappement des caractères HTML dans les traductions
    },
  });

export default i18n;