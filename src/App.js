import React, { useState, useEffect } from "react";
import QuoteContainer from "./components/QuoteContainer";
import SocialContainer from "./components/SocialContainer";

const App = () => {
  const [len, setLen] = useState();
  const [state, setState] = useState(() => Math.floor(Math.random() * 30));
  const [datas, setDatas] = useState({});
  const quote = datas.quote;
  const author = datas.author;

  // setTimeOut prevent a new request befero 250ms
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetch(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
        .then((res) => res.json())
        .then((data) => {
          setLen(data.quotes.length);
          setDatas(data.quotes[state]);
        });
    }, 250);
    return () => clearTimeout(timeout);
  }, [state]);

  function getRandom() {
    setState(Math.floor(Math.random() * len));
  }

  return (
    <div id="quote-box" className="quote-box">
      <QuoteContainer quo={quote} aut={author} />
      <SocialContainer getNum={getRandom} quo={quote} aut={author} />
    </div>
  );
};

export default App;
