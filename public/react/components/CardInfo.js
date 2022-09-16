import React, { useState } from "react";
import { Page } from "./Page";


export function CardInfo ({data, setData}){
 
  
const  handlerReturn = () => {
  setData(false)
}

  return (
    <>
      <div >
        <h2>{data.title}</h2> 
        <h4>{data.author.name}</h4> 
      <p>{data.content}</p> 
        {/* fix date to render */}
    <h2>{data.date}</h2> 
        {/* tags??? */}
      <h2>{data.tags.map((tag, idx) => {return <p key={idx}>{tag.name}</p> })}</h2>
        <button className="addArticle"  onClick={handlerReturn}>Back to Wiki List</button>
      </div>
    </>
  );
};
