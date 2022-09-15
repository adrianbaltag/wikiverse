import React, {useState} from 'react';
import { CardInfo } from './CardInfo';

export const Page = ({page, displayAuthorData}) => {
  const [show, setShow] = useState(false);
const handlerLink = () => {
  setShow(true)
}


  return <>
  <h3 onClick={() =>  displayAuthorData(page)}>{page.title}</h3>
    {/* <h3 onClick={handlerLink}>{props.page.title}</h3> */}
   {/* <CardInfo /> */}
   
  </>
} 
	
// Title

// Author

// Content

// Tags

// Date (createdAt)