import React from "react";


function Links(props) {
 
  return (
    <div>
      <h3>Links</h3>
      <a href={props.link.github}>{props.link.github}</a>
      <a href={props.link.linkedin}>{props.link.linkedin}</a>
    </div>
  );
}

export default Links;
