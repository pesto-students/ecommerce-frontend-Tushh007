import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './locales';
import messages from './messages';

function provider({ children, locale = LOCALES.ENGLISH }) {
  return (
    <div className="provider">
      <IntlProvider
        locale={locale}
        textComponent={Fragment}
        messages={messages[locale]}
      >
        {children}
      </IntlProvider>
    </div>
  );
}

export default provider;
