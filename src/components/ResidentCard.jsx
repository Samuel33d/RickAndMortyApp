import axios from "axios";
import { IconEye } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { characterStatus } from "../constants/characters";
import CharacterModal from "./CharacterModal";

const ResidentCard = ({ residentEndpoint }) => {
  const [resident, setResident] = useState(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    axios
      .get(residentEndpoint)
      .then(({ data }) => setResident(data))
      .catch((err) => console.log(err));
  }, []);

  const handleModal = () => {
    setShowModal(!showModal);
    console.log(resident);
  };

  return (
    <>
      <article className="translate transition-transform  border-[1px] border-[#8EFF8B] bg-transparent">
        <header className="header overflow-hidden relative border-b-[1px] border-[#8EFF8B]">
          <img src={resident?.image} alt="" />
          <div className="cursor-pointer overlay " onClick={handleModal}>
            <IconEye className="animate-bounce" size={56} />
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/70 border-2 border-[#8EFF8B]  px-8 py-1  flex justify-center items-center gap-3 ">
            <div
              className={`h-4 w-4 ${
                characterStatus[resident?.status]
              } rounded-full`}
            ></div>
            <span className="text-sm font-bold">{resident?.status}</span>
          </div>
        </header>
        <div>
          <h3
            onClick={handleModal}
            className="cursor-pointer text-2xl font-bold p-4 pb-1 border-b-[1px] border-[#0849517d] hover:text-[#8EFF8B] transition-colors"
          >
            {resident?.name}
          </h3>
        </div>
        <ul className="p-4 py-5 grid grid-cols-[auto,1fr] gap-3 text-[#938686] text-sm ">
          <li>Species </li>
          <li className="text-white font-bold">{resident?.name}</li>
          <li>Origin</li>
          <li className="text-white font-bold">{resident?.origin.name}</li>
          <li>Times appear</li>
          <li className="text-white font-bold">
            {resident?.episode.length} time
          </li>
        </ul>
      </article>

      <div className="fixed top-0 w-screen z-10 ">
        <CharacterModal
          residents={resident}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </>
  );
};
export default ResidentCard;
