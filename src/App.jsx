import axios from "axios";
import "./App.css";
import { randomNumber } from "./utils/random";
import { useState } from "react";
import { useEffect } from "react";
import Location from "./components/Location";
import Load from "./components/Load";
import ResidentList from "./components/ResidentList";
import Header from "./components/Header";

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
    <main className=" text-white ">
      {location === null ? (
        <Load />
      ) : (
        <>
          <Header />
          <Location location={location} setLocation={setLocation} />
          <ResidentList residents={location.residents} />
        </>
      )}
    </main>
  );
}

export default App;
