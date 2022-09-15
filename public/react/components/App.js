import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import { CardInfo } from "./CardInfo";
import { Page } from "./Page";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [data, setData] = useState(null);
  const [show, setShow] = useState (false)

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  const displayAuthorData = async (page) => {
    const response = await fetch(`${apiURL}/wiki/${page.slug}`);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchPages();
  }, []);

  //page handler->open
  const handlerLink = () => {
    setShow(true);
  };

  // console.log(pages)
  return (
    <main>
      {data ? (
        <div>
          <CardInfo data={data} setData={setData} pages={pages} setShow={setShow}/>
        </div>
      ) : (
        <div>
          <h1>WikiVerse</h1>

          <h2>
            Click on an article for more info{" "}
            <span className="ascii-arrow">&#8595;</span>
          </h2>

          <PagesList
            onClick={handlerLink}
            pages={pages}
            displayAuthorData={displayAuthorData}
          />
        </div>
      )}
    </main>
  );
};
