import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import { CardInfo } from "./CardInfo";
// import { Page } from "./Page";
import { FormAdding } from "./FormAdding";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const [addArticle, setAddArticle] = useState(false);

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

  // <Article articleData={articleData}  setIsClicked={setIsClicked} />
  // ) :
  // isAddingArticle ? (
  //     <Form  setIsAddingArticle={setIsAddingArticle} fetchPages={fetchPages} />
  // ) : (
  //     <div>
  // <h1>WikiVerse</h1>
  // <h2>An interesting :books:</h2>
  //     <PagesList pages={pages} setArticleData={setArticleData} setIsClicked={setIsClicked} />
  //     <button onClick={() => setIsAddingArticle(true)}>Create Page</button>
  //     </div>


  return (
    <main>
      {data ? (
        <div>
          <CardInfo
            data={data}
            setData={setData}
            pages={pages}
            setShow={setShow}
          />
        </div>
      ) : addArticle ? (
        <FormAdding setAddArticle={setAddArticle} fetchPages={fetchPages} />
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

          <button onClick={() => setAddArticle(true)}>Add Article</button>
        </div>
      )}
    </main>
  );
};
