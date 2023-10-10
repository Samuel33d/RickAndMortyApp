import axios from "axios";
import { useState } from "react";

const Location = ({ location, setLocation }) => {
  const [text, setText] = useState("");
  const [newLocation, setNewLocation] = useState([]);

  const handleInput = (e) => {
    setText(e.target.value);
    const locationName = e.target.value;

    axios
      .get(`https://rickandmortyapi.com/api/location/?name=${locationName}`)
      .then(({ data }) => setNewLocation(data.results))
      .catch((err) => console.log(err));

    for (let i = 0; i < newLocation.length; i++) {
      if (newLocation[i].name === locationName) {
        axios
          .get(`https://rickandmortyapi.com/api/location/?name=${locationName}`)
          .then(({ data }) => setLocation(data.results[0]))
          .catch((err) => console.log(err));
      }
    }
  };

  return (
    <section className=" text-center items-center  sm:flex  flex-col gap-10 px-1 bg-[url('/bg-header.jpg')] bg-contain">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="form grid  relative sm:w-[619px]  mx-auto w-[300px]"
      >
        <input
          type="text"
          value={text}
          className=" outline-none p-3 px-4 bg-transparent border-[1px] text-white border-[#8EFF8B] text-sm sm:text-lg"
          name="locationName"
          onChange={handleInput}
          onClick={() => setText("")}
          autoComplete="off"
          placeholder="Type a location name..."
        />
        <div
          className={`${text === "" ? "hidden" : "flex"} ${
            text.length > 6 ? "hidden" : "flex"
          } 
          absolute top-12 border-[1px] border-[#8EFF8B] bg-black/90  text-white flex flex-col z-10 h-32 w-[18.76rem] text-[.7rem]  sm:w-full sm:text-lg overflow-y-scroll gap-4 py-3 shadowbox`}
        >
          {newLocation?.map((location) => (
            <option
              className=" sm:border-none w-[full] cursor-pointer "
              key={location.name}
              value={location.name}
              onClick={handleInput}
            >
              {location.name}
            </option>
          ))}
        </div>
      </form>

      <h3 className="text-[#8EFF8B] text-md sm:hidden py-10 ">
        ¡Welcome to {location.name}!
      </h3>

      <article className="border-[1px] border-[#8EFF8B] hidden sm:flex flex-col h-[150px]  justify-evenly gap-4 md:w-[750px] ">
        <h3 className="text-[#8EFF8B] text-lg md:text-2xl sm:text-xl  ">
          ¡Welcome to {location.name}!
        </h3>
        <ul className="flex  text-[#938686] md:text-md md:justify-around g lg:text-lg  sm:text-[1rem] text-sm gap-10 px-10">
          <li>Type: {location.type}</li>
          <li>Dimension: {location.dimension}</li>
          <li>Population: {location.residents.length}</li>
        </ul>
      </article>
    </section>
  );
};
export default Location;
