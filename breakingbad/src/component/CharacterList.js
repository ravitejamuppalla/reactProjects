import React, { useEffect, useState } from "react";
import UseHttp from "../hooks/UseHttp";
import spinner from "../images/spinner.gif";
import CharcterItems from "./CharcterItems";
import classes from "./CharacterList.module.css";

export default function CharacterList() {
  const [chactersData, setChacterData] = useState([]);
  const { isLoading, isError, sendRequest } = UseHttp();
  function resposeData(data) {
    console.log(data);
    setChacterData(data);
  }
  useEffect(() => {
    sendRequest(
      {
        url: "https://breakingbadapi.com/api/characters",
        requestMethod: "GET",
      },
      resposeData
    );
  }, [sendRequest]);

  if (isLoading)
    return (
      <div>
        <img src={spinner} alt="Spinner Running"></img>
      </div>
    );

  if (isError) {
    return <div>"Something went wrong"</div>;
  }

  if (chactersData.length > 0)
    return (
      <section className={classes.colgrid4}>
        {chactersData.map((data) => {
          return (
            <CharcterItems id={data.char_id} wholeObject={data}></CharcterItems>
          );
        })}
      </section>
    );
}
