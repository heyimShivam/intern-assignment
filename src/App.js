import { useEffect, useState } from "react";

import { MERCHANT_METADATA } from "./constants";
import Routing from "./routing";

import "./App.css";

function App() {
  const [siteMetaData, setSiteMetaData] = useState();

  async function fetchMetadata() {
    await fetch(MERCHANT_METADATA)
      .then((value) => value.json())
      .then((data) => {
        console.log(data);
        setSiteMetaData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchMetadata();

    if (siteMetaData && siteMetaData.theme && siteMetaData.theme["--primary"]) {
      document.documentElement.style.setProperty(
        "--primary",
        siteMetaData.theme["--primary"]
      );
      document.documentElement.style.setProperty(
        "--background",
        siteMetaData.theme["--background"]
      );
      document.documentElement.style.setProperty(
        "--foreground",
        siteMetaData.theme["--foreground"]
      );
      document.documentElement.style.setProperty(
        "--primary-foreground",
        siteMetaData.theme["--primary-foreground"]
      );
    }

    if (siteMetaData?.merchantLogo) {
      let link = document.querySelector("link[rel~='icon']");

      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.getElementsByTagName("head")[0].appendChild(link);
      }

      link.href = siteMetaData?.merchantLogo;
    }

    if (siteMetaData?.merchantName) {
      let title = document.getElementsByTagName("title")[0];
      title.innerText = siteMetaData?.merchantName;
    }
  }, [siteMetaData?.merchantLogo]);

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
