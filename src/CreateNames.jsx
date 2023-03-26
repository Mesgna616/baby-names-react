import React from "react";
import SingleName from "./SingleName";

const CreateNames = ({
  arrayOfNames,
  favoriteNames,
  setFavoriteNames,
  setArrayOfNames,
}) => {
  return (
    <div className="App-body">
      {arrayOfNames
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((name, index) => {
          return (
            <SingleName
              name={name}
              index={index}
              onClick={() => {
                setFavoriteNames(favoriteNames.concat(name));
                setArrayOfNames(
                  arrayOfNames.filter((clickedName) => {
                    return name.name !== clickedName.name;
                  })
                );
              }}
            />
          );
        })}
    </div>
  );
};
export default CreateNames;
