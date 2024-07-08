import enHeader from "./components/header/en.json";
import frHeader from "./components/header/fr.json";
import enFooter from "./components/footer/en.json";
import frFooter from "./components/footer/fr.json";

import enHomePage from "./pages/home/en.json";
import frHomePage from "./pages/home/fr.json";

import enVisitUsPage from "./pages/visitus/en.json";
import frVisitUsPage from "./pages/visitus/fr.json";

import enSermonsPage from "./pages/sermons/en.json";
import frSermonsPage from "./pages/sermons/fr.json";

import enGalleryPage from "./pages/gallery/en.json";
import frGalleryPage from "./pages/gallery/fr.json";

import enGivePage from "./pages/give/en.json";
import frGivePage from "./pages/give/fr.json";

import enAboutUsPage from "./pages/aboutus/en.json";
import frAboutUsPage from "./pages/aboutus/fr.json";

const COMPONENTS_TRANSLATE_MERGE = {
  EN: {
    ...enHeader,
    ...enFooter,
  },
  FR: {
    ...frHeader,
    ...frFooter,
  },
};

const PAGES_TRANSLATE_MERGE = {
  EN: {
    ...enHomePage,
    ...enVisitUsPage,
    ...enSermonsPage,
    ...enGalleryPage,
    ...enGivePage,
    ...enAboutUsPage
  },
  FR: {
    ...frHomePage,
    ...frVisitUsPage,
    ...frSermonsPage,
    ...frGalleryPage,
    ...frGivePage,
    ...frAboutUsPage
  },
};

const translate = {
  english: {
    ...COMPONENTS_TRANSLATE_MERGE.EN,
    ...PAGES_TRANSLATE_MERGE.EN,
  },
  francais: {
    ...COMPONENTS_TRANSLATE_MERGE.FR,
    ...PAGES_TRANSLATE_MERGE.FR,
  },
};
export default translate;
