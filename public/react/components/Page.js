import React, {useState} from 'react';

export const Page = (props) => {
  const [show, setShow] = useState(false);
const handlerLink = () => {
  setShow(true)
}
  return <>
    <h3 onClick={handlerLink}>{props.page.title}</h3>
    <div>
       {show ? <h2>{props.page.id}</h2> : null}
       {show ? <h2>{props.page.content}</h2> : null}
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