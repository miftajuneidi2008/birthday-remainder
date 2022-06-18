import React from "react";
import "./list.css";
const List = ({ people }) => {
  return (
    <div className="list">
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div key={id} className="parent">
            <div className="child-left">
              <img
                src={image}
                alt=""
                width="100px"
                height="100px"
                className="img"
              />
            </div>
            <div className="child-right">
              <h2 className="name">{name}</h2>
              <p>{age} years old</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default List;
