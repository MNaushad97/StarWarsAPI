import { useState, useEffect } from "react";
import AvailableCharacters from "./AvailableCharacters";
import Filters from "./Filters";

function App() {
  const [characterList, setCharacterList] = useState([]); //this list help in filter fixed data
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setLoading] = useState(true); //as in this component we always start with loading

  //below fetching CharacterData for characterList
  const handleInfiniteScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 25 >=
      document.documentElement.scrollHeight
    ) {
      setPageNumber((prev) => (prev === 10 ? prev : prev + 1));
    }
  };
  const fetchCharacters = async (number) => {
    const response = await fetch(
      `https://swapi.py4e.com/api/people/?page=${number}`
    );

    if (!response.ok) {
      throw new Error("Something Went Wrong");
    }
    const respData = await response.json();
    const final = await respData.results;
    console.log("final", final);
    const list = [];
    final.forEach((char) => {
      list.push({
        Name: char.name,
        BirthYear: char.birth_year,
        Species: char.species,
        Movie: char.films,
        Spaceship: char.starships,
      });
    });
    setCharacterList([...characterList, ...list]);
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacters(pageNumber).catch((error) => {
      console.log(error);
    });
  }, [pageNumber]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="CharactersLoading">
        <p>Loading....</p>
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="App  ">
        <Filters />

        <AvailableCharacters characterList={characterList} />
      </div>
    </div>
  );
}

export default App;
