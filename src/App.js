import React, {useState} from "react";
import names from "./babyNameData.json"
import './App.css';
import Favorites from "./Favorites";
import CreateNames from "./CreateNames";


function filterNames(input) {
  return names.filter((name) =>
    name.name.toLowerCase().includes(input.toLowerCase())
  );
}



function App() {
   const [arrayOfNames, setArrayOfNames] = useState(names);
  const[favoriteNames, setFavoriteNames]=useState([]);

  function filterGender(input) {
    return names.filter((gender) =>gender.sex.toLowerCase()===input);
  }
 
  return (
    <div>
      <h1>
        Baby <span className="name">Name</span> Picker
      </h1>

      <input
        className="input"
        type="text"
        placeholder="Search here..."
        onChange={(event) => {
          setArrayOfNames(filterNames(event.target.value));
        }}
      ></input>
      <button className="all" onClick={(e)=>{
        e.preventDefault();
      setArrayOfNames(names);
      }}>All</button>
      <button className="female" onClick={(e)=>{
        e.preventDefault();
      setArrayOfNames(filterGender("f"))}}>
        Female
      </button>
      <button className="male" onClick={(e)=>{
        e.preventDefault();
      setArrayOfNames(filterGender("m"))}}>Male</button>

      <Favorites
        favoriteNames={favoriteNames}
        setFavoriteNames={setFavoriteNames}
        setArrayOfNames={setArrayOfNames}
        arrayOfNames={arrayOfNames}
      />

      <CreateNames
        favoriteNames={favoriteNames}
        setFavoriteNames={setFavoriteNames}
        setArrayOfNames={setArrayOfNames}
        arrayOfNames={arrayOfNames}
      />
    </div>
  );
}

export default App;