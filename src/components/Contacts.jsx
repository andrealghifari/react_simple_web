import React from "react";
import "../styles/Contacts.css";
import Parse from "html-react-parser";
export default function Contacts(props) {
  return (
    <div className="footer">{props.contactSection.map((element, index) => {
       return (
        <div className="footer-section" key={index}>
            {Parse(element.content)}
        </div>
       ) 
    })}</div>
  );
}
