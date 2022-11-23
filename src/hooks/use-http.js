import { useEffect, useState, useCallback } from "react";

const useFetchAPI = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const sendRequest = useCallback(async () => {
    const response = await fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    // method .json() auto chuyển data định dạng JSON => {} JS
    const result = await response.json();

    setData(result);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return { data, isLoading };
};

export default useFetchAPI;
