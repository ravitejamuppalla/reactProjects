import React, { useEffect, useState } from "react";
import QuotesAuthor from "./QuotesAuthor";
import QuotesText from "./QuotesText";
import Button from "./Button";
import "./Quotes.css";
import UseHttp from "../hooks/UseHttp";
import LoadingSpinner from "../UI/LoadingSpinner";

export default function Quotes() {
  const [quotesTextValue, setQuotesTextValue] = useState("");
  const [quotesAuthorValue, setQuotesAuthorValue] = useState("");
  const [colorData, setColourData] = useState("");
  const [getNewQuote, setGetNewQuote] = useState("");
  function randomGenerator() {
    let colorPatterns = "1234567890ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += colorPatterns[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function requestedData(data) {
    console.log(data);
    const randomIndex = Math.floor(Math.random() * data.quotes.length);
    const quotesData = data.quotes[randomIndex];
    setQuotesTextValue(quotesData.quote);
    setQuotesAuthorValue(quotesData.author);
    console.log(colorData);
    document.body.style.color = colorData;
    document.body.style.backgroundColor = colorData;
  }

  const { isLoading, isError, sendRequest } = UseHttp();
  useEffect(() => {
    sendRequest(
      {
        url: "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
      },
      requestedData
    );
  }, [getNewQuote, sendRequest]);

  if (isLoading)
    return (
      <div className="quotesCards">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );

  if (isError) {
    return (
      <div className="quotesCards">
        <p className="ErrorMessage">{isError}</p>
      </div>
    );
  }
  function onclicking(data) {
    const randomIndex = Math.floor(Math.random() * 100000);
    setGetNewQuote(randomIndex);
    setColourData(randomGenerator());
  }
  return (
    <React.Fragment>
      <div className="quotesCards">
        <QuotesText quotesText={quotesTextValue}></QuotesText>
        <QuotesAuthor quotesAuthor={quotesAuthorValue}></QuotesAuthor>
        <Button colourdataButton={colorData} newQuotes={onclicking}></Button>
      </div>
    </React.Fragment>
  );
}
