import { useCallback, useState } from "react";

function UseHttp() {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState("");
  let sendRequest = useCallback(async (objectData, resposeData) => {
    setLoading(true);
    setError(null);
    try {
      let response = await fetch(objectData.url, {
        method: objectData.requestMethod ? objectData.requestMethod : "GET",
        headers: objectData.headers ? objectData.headers : {},
        body: objectData.httpData ? objectData.httpData : null,
      });
      if (!response) throw new Error("Failed in the request end");
      let responseJson = await response.json();
      resposeData(responseJson);
      setLoading(false);
    } catch (error) {
      setError(error.message());
    }
  }, []);

  return {
    isLoading: isLoading,
    isError: isError,
    sendRequest: sendRequest,
  };
}

export default UseHttp;
