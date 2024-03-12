import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Cards(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.photo} />
        </div>
        <div className="bottom">
          <Details detailInfo={props.number} />
          <Details detailInfo={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Cards;
