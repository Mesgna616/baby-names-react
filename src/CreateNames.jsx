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
        .map((value, index) => {
          return (
            <SingleName
              value={value}
              index={index}
              onClick={() => {
                setFavoriteNames(favoriteNames.concat(value));
                setArrayOfNames(
                  arrayOfNames.filter((clickedName) => {
                    return value.name !== clickedName.name;
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
