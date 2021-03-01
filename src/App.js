import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import ProductRow from './components/ProductRow/ProductRow';
import './App.css';
import { PRODUCTS } from './utils/products';

import { I18nProvider, LOCALES } from './utils/i18n';
import translate from './utils/i18n/translate';

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
    <I18nProvider locale={locale}>
      <div className="App">
        <button onClick={() => setLocale(LOCALES.ENGLISH)}>English</button>
        <button onClick={() => setLocale(LOCALES.GERMAN)}>German</button>
        <button onClick={() => setLocale(LOCALES.FRENCH)}>French</button>

        {/**Navigation bar */}
        {/**Carousel Banner */}
        {/**Category Tiles */}
        <ProductRow title="Featured Products" items={PRODUCTS} />
        <ProductRow title="Recommended for you" items={PRODUCTS} />
        <Footer />
      </div>
    </I18nProvider>
  );
}

export default App;
