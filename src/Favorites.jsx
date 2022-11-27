import React from "react";
import SingleName from "./SingleName";

const Favorites = ({
  favoriteNames,
  setFavoriteNames,
  setArrayOfNames,arrayOfNames
}) => {
  return (
    <div className="App">
      
      <p> Favorites:</p>
      {favoriteNames.map((favoriteName, index) => {
        return (
          <SingleName
            value={favoriteName}
            index={index}
            onClick={() => {
              setArrayOfNames(arrayOfNames.concat(favoriteName));
              setFavoriteNames(
                favoriteNames.filter((clickedName) => {
                  return favoriteName.name !== clickedName.name;
                })
              );
            }}
          />
        );
      })}
    </div>
  );
};
export default Favorites;