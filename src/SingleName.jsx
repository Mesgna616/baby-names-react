import React from "react";

const SingleName = ({ name, index, onClick }) => {
  return (
    <p key={index} className={name.sex} onClick={onClick}>
    
      {name.name}
    </p>
  );
};

export default SingleName;