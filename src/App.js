import { useTranslation } from 'react-i18next';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Routerr from './router/router';
// import TextDirection from './components/DirText';


function App() {
  const { i18n } = useTranslation();

  let currentLanguage = i18n.language;
  const isRTL = currentLanguage === 'ar';

  return (
    <div className={`${isRTL ? 'rtl' : 'ltr'}`} style={{ backgroundColor: 'var(--background-color)' }}>
      <Header />
      <Routerr />
      <Footer />
    </div>
  );
}

export default App;