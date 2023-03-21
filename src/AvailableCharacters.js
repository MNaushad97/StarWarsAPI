import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import Details from "./Details";

const movieList = {};
const speciesList = {};
const starships = {};

function AvailableCharacters({ characterList }) {
  const [characterData, setCharacterData] = useState({
    name: "",
    movies: [],
    species: [],
    spaceships: [],
  });

  const fetchDataOf = (data, isMovie = false, isSpecies = false) => {
    let list = [];
    data.forEach((m) => {
      let check = isMovie
        ? movieList[m]
        : isSpecies
        ? speciesList[m]
        : starships[m];
      if (check) {
        list.push(check);
      } else {
        fetch(m)
          .then((res) => res.json())
          .then((d) => {
            if (isMovie) {
              list.push(d.title);
              movieList[m] = d.title;
            } else {
              list.push(d.name);
              isSpecies ? (speciesList[m] = d.name) : (starships[m] = d.name);
            }
          });
      }
    });

    setCharacterData((prev) => ({
      ...prev,
      ...(isMovie
        ? { movies: list }
        : isSpecies
        ? { species: list }
        : { spaceships: list }),
    }));
  };

  useEffect(() => {
    console.log("characterData", characterData);
  }, [characterData]);

  const showDetails = (id) => {
    let character = characterList[id];
    fetchDataOf(character.Movie, true);
    fetchDataOf(character.Species, false, true);
    fetchDataOf(character.Spaceship);
    setCharacterData((prev) => ({ ...prev, name: character.Name }));
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
            characterName={characterData.name}
            characterMovies={characterData.movies}
            characterSpecies={characterData.species}
            characterStarships={characterData.spaceships}
          />
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
