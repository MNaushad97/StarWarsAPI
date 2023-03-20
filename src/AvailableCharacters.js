import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import Details from "./Details";

const movieList = {};

function AvailableCharacters({ characterList }) {
  const [characterMovies, setCharacterMovies] = useState([]);
  const [characterName, setCharacterName] = useState("");

  const fetchMovies = (movies) => {
    let list = [];
    movies.forEach(async (m) => {
      if (movieList[m]) {
        list.push(movieList[m]);
      } else {
        console.log("fetching");
        await fetch(m)
          .then((res) => res.json())
          .then((d) => {
            movieList[m] = d.title;
            list.push(d.title);
          });
      }
    });

    setCharacterMovies(list);
  };

  const showDetails = (id) => {
    let character = characterList[id];
    fetchMovies(character.Movie);
    setCharacterName(character.Name);
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
      <div className="flex mt-12 justify-between py-4 px-2  w-screen h-screen">
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
