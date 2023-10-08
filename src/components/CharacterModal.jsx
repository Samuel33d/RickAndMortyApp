import axios from "axios";
import { useEffect, useState } from "react";
import { IconX } from "@tabler/icons-react";

const CharacterModal = ({ residents, showModal, setShowModal }) => {
  const [episode, setEpisode] = useState(null);

  const ENDPOINT = residents?.episode[0];

  useEffect(() => {
    axios
      .get(ENDPOINT)
      .then(({ data }) => setEpisode(data))
      .catch((err) => console.log(err));
  }, [showModal]);

  return (
    <>
      {showModal ? (
        <div className="absolute  min-h-[100vh] min-w-full z-60 bg-black/80 grid place-items-center top-30 left-0">
          <div className="card border-2 border-[#8EFF8B] bg-black/80 max-w-[300px] sm:max-w-[400px] max-h-auto absolute ">
            <div className="relative">
              <img src={residents?.image} alt="" />
              <div
                onClick={() => setShowModal(!showModal)}
                className="absolute  rounded-full p-1  bg-white text-black top-2 right-2 cursor-pointer hover:bg-[#8EFF8B]"
              >
                <IconX />
              </div>
            </div>

            <div className="p-4 ">
              <h3 className="text-2xl font-bold pb-2 border-b-[1px] border-[#0849517d]">
                {residents?.name}
              </h3>

              <ul className="grid grid-cols-[auto_auto] text-[#938686] gap-2 sm:gap-4 text-[.9rem] py-3">
                <li className="">Gender:</li>
                <li className="text-white sm:text-[1rem]">
                  {residents?.gender}
                </li>
                <li>Last Location:</li>
                <li className="text-white sm:text-[1rem]">
                  {residents?.location.name}
                </li>
                <li>First Appearance EP:</li>
                <li className="text-white sm:text-[1rem]">{episode?.name}</li>
                <li>Air Date Episode:</li>
                <li className="text-white text-[1rem]">{episode?.air_date}</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default CharacterModal;
