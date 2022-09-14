import React, {useState} from 'react';
import { CardInfo } from './CardInfo';

export const Page = (props) => {
  const [show, setShow] = useState(false);
const handlerLink = () => {
  setShow(true)
}
  return <>
    <h3 onClick={handlerLink}>{props.page.title}</h3>
   {/* <CardInfo /> */}
   <div >
        {show ? <h2>{props.page.title}</h2> : null}
        {show ? <h4>{`Author Name - ID: ${props.page.id}`}</h4> : null}
        {show ? <p>{props.page.content}</p> : null}
        {/* fix date to render */}
        {show ? <h2>{props.page.date}</h2> : null}
        {/* tags??? */}
        {show ? <h2>{props.tags}</h2> : null}
        {show ? <button>Back to Wiki List</button> : null}
      </div>
  </>
} 
	
// Title

// Author

// Content

// Tags

// Date (createdAt)