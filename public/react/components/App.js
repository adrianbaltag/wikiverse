import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pages, setPages] = useState([]);

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchPages();
  }, []);

  //page handler->open
	console.log(pages)
  return (
    <main>
      <h1>WikiVerse</h1>

      <h2>Click on an article for more info &#x2193;</h2>
	
		<PagesList pages={pages} />
	
      
	

    </main>
  );
};