import { useTranslation } from 'react-i18next';
import './App.css';
import Routerr from './router/router';
import { useEffect, useState } from 'react';
import SplashScreen from './pages/spalshScreen';


function App() {
  const { i18n } = useTranslation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2500);
  }, []);

  let currentLanguage = i18n.language;
  const isRTL = currentLanguage === 'ar';

  return (
    <div className={`${isRTL ? 'rtl' : 'ltr'}`} style={{ backgroundColor: 'var(--background-color)' }}>
      {showSplash ? <SplashScreen /> : <Routerr />}
    </div>
  );
}

export default App;