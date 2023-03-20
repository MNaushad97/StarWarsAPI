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
      <div className="flex ">
        <div className="mr-2 mt-24">{characterCardsList}</div>

        <Details
          characterName={characterName}
          characterMovies={characterMovies}
        />
      </div>
    </>
  );
}

export default AvailableCharacters;
