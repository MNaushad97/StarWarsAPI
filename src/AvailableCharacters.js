import { useState } from "react";
import CharacterCard from "./CharacterCard";
import Details from "./Details";

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
      <div className="flex mt-12 justify-between p-4 w-screen h-screen ">
        <div id="characterCardList " className=" p-4  ">
          {characterCardsList}
        </div>
        <div className="p-2  w-[86vw] h-[91vh] fixed left-52 ">
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
