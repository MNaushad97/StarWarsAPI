import DetailContent from "./DetailContent";

const url = `url("https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80")`;
function Details({
  characterName,
  characterMovies,
  characterSpecies,
  characterStarships,
}) {
  console.log("characterMovies2", characterMovies);
  console.log("characterSpecies2", characterSpecies);
  console.log("starships2", characterStarships);
  return (
    <>
      <div
        className={`modal bg-[${url}] w-full h-full rounded  flex justify-center items-center align-middle opacity-80  `}
      >
        {characterName && (
          <div
            className="text-black bg-white rounded-lg p-8 w-fit h-fit shadow-[0px_5px_5px_-5px_rgba(0,0,0,0.7)] backdrop-blur-[2.5px]  bg-white/30 border transition-all duration-[250ms]  ease-out
        sm:w-64 hover:scale-[1.06] hover:shadow-[0px_8px_5px_-5px_rgba(0,0,0,0.7)] "
          >
            <h3 className="text-black font-bold pb-1 mt-0 ">Name:</h3>
            {characterName}
            <DetailContent entityTitle="Movie" entityData={characterMovies} />
            <DetailContent
              entityTitle="Species"
              entityData={characterSpecies}
            />
            <DetailContent
              entityTitle="Starships"
              entityData={characterStarships}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Details;

/*
0-People api only 10 people (Human and Droid) but what about all other the characters ??
-how should species/movies filter work ...does it should work according to already fetched list of 10
1-in range picker -> what should be the highest BirthYear and Lowest BirthYear
2-Range and all  Movie relations ?
4-

*/
