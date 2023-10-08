import axios from "axios";
import "./App.css";
import { randomNumber } from "./utils/random";
import { useState } from "react";
import { useEffect } from "react";
import Location from "./components/Location";
import Load from "./components/Load";
import ResidentList from "./components/ResidentList";

function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomNumber(126)}`)
      .then(({ data }) =>
        setTimeout(() => {
          setLocation(data);
        }, 500)
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="bg-black text-white ">
      {location === null ? (
        <Load />
      ) : (
        <>
          <header className="overflow-hidden px-2 relative flex justify-center bg-[url('/bg-header.jpg')] sm:h-[380px] h-[280px] bg-cover ">
            <img
              className="spin absolute top-[-8.5rem] h-[340px] w-[300px] sm:top-[-14rem]  sm:w-[550px] sm:h-[550px]"
              src="/logo2.png"
              alt=""
            />
            <img
              className="absolute top-0 object-cover h-[330px] sm:h-[490px]"
              src="/Ellipse.png"
              alt=""
            />
            <img
              className="absolute top-12 w-[320px] h-[100px] sm:w-[530px] sm:h-[180px] sm:top-16"
              src="/nombre.png"
              alt=""
            />
          </header>
          <Location location={location} setLocation={setLocation} />
          <ResidentList residents={location.residents} />
        </>
      )}
    </main>
  );
}

export default App;
