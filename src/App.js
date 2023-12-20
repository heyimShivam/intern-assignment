import { useEffect } from "react";

import Routing from "./routing";
import { MERCHANT_METADATA } from "./constants";

import "./App.css";

function App() {
  async function fetchMetadata() {
    await fetch(MERCHANT_METADATA)
      .then((value) => value.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchMetadata();
  }, []);

  const value = {
    merchantName: "GROWW",
    merchantLogo: "https://groww.in/groww-logo-270.png",
    theme: {
      "--background": "hsl(222.2, 84%, 4.9%)",
      "--foreground": "hsl(210, 40%, 98%)",
      "--primary": "hsl(217.2, 91.2%, 59.8%)",
      "--primary-foreground": "hsl(222.2, 47.4%, 11.2%)",
    },
  };

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
