import { useState } from "react";
import CharacterCard from "./CharacterCard";
import Details from "./Details";

const url = `url("https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80")`;

function AvailableCharacters({ characterList }) {
  console.log("characterList2", characterList);
  const [characterMovies, setCharacterMovies] = useState([]);
  const [isShowing, setShowing] = useState(false);
  const [characterName, setCharacterName] = useState();
  const movieList = [];
  const fetchMovies = (movies) => {
    let movieList = {};

    movies.map((m) => {
      fetch(m)
        .then((res) => res.json())
        .then((d) => movieList.push(d.title));
    });
    setCharacterMovies(movieList);
  };

  const showDetails = (id) => {
    let char = characterList[id];

    setCharacterName(char.Name);
    setShowing(true);
  };

  const characterCardsList = characterList.map((c, index) => (
    <CharacterCard
      name={c.Name}
      showDetails={showDetails}
      key={c.Name}
      id={index}
    />
  ));

  return (
    <>
      <div
        className={`flex mt-12 justify-between py-4 px-2  w-screen h-screen `}
      >
        <div id="characterCardList " className="p-1">
          {characterCardsList}
        </div>
        <div className="p-2 h-[93vh] fixed left-44 right-2">
          <Details
            characterName={characterName}
            characterMovies={characterMovies}
          />{" "}
        </div>
      </div>
    </>
  );
}

export default AvailableCharacters;

/*
<div className=" bg-yellow-100 scroll-auto p-8 ">
          {characterCardsList}
        </div>
        <div className="flex fixed z-10 justify-center bg-blue-200 w-screen h-screen p-4">
          <Details
            characterName={characterName}
            characterMovies={characterMovies}
          />
        </div>
*/
