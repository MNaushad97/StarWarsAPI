import { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";

// import Slider from '@mui/material/Slider';

function Filters() {
  return (
    <>
      <div className=" bg-pink-200 fixed  z-10 flex  w-full">
        <form className="flex flex-row ml-24 py-0.5 w-full">
          <div className="flex p-2 my-2  w-full justify-start items-center">
            abc
          </div>
        </form>
      </div>
    </>
  );
}

export default Filters;

/*

  const [movieList, setMovieList] = useState([]);
  const [speciesList, setSpeciesList] = useState([]);

  //below fetching updated complete species list

  const fetchDataOf = async (searchKeyword) => {
    const response = await fetch(`https://swapi.py4e.com/api/${searchKeyword}`);
    if (!response.ok) {
      throw new Error("Something Went Wrong");
    }
    const respData = await response.json();
    const final = await respData.results;
    final.map((final) => {
      if (searchKeyword === "movies") {
        return setMovieList((movieList) => [
          ...movieList,
          {
            key: final.title,
            text: final.title,
            value: final.title,
          },
        ]);
      } else {
        return setSpeciesList((speciesList) => [
          ...speciesList,
          { key: final.name, text: final.name, value: final.name },
        ]);
      }
    });
  };

  useEffect(() => {
    console.log("movieList", movieList, ",speciesList", speciesList);
  }, [movieList, speciesList]);

  useEffect(() => {
    //fetchDataOf("species");
    //fetchDataOf("films");
  }, []);
  //above fetching updated complete species list


<Slider
                sx={{ width: 300 }}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
              />

      const [value, setValue] = useState([20, 37]);
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };



  <input className="bg-gray-400 rounded-md p-2 my-4 hover:bg-gray-300" type="submit" value="Filter"  />
  
*/
