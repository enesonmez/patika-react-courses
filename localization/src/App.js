import "./App.css";

import { useState, useEffect } from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

const messages = {
  "tr-TR": {
    title: "Mesajlar",
    description: "{count} yeni dilekçeniz var.",
  },
  "en-GB": {
    title: "Messages",
    description: "You have {count} new messages.",
  },
};

function App() {
  const isLocale = localStorage.getItem("locale");
  const defalutLocale = isLocale || navigator.language;
  const [lang, setLang] = useState(defalutLocale);

  useEffect(() => {
    localStorage.setItem("locale", lang);
  }, [lang]);

  return (
    <div className="App">
      <div className="container">
        <IntlProvider locale={lang} messages={messages[lang]}>
          <h3>
            <FormattedMessage id="title" />
          </h3>
          <p>
            <FormattedMessage id="description" values={{ count: 5 }} />
          </p>
          <div>
            <button className="tr-button" onClick={() => setLang("tr-TR")}>
              TR
            </button>
            <button className="en-button" onClick={() => setLang("en-GB")}>
              EN
            </button>
          </div>
        </IntlProvider>
      </div>
    </div>
  );
}

export default App;
