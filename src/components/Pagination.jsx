import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import { paginationLogic } from "../utils/pagination";

const Pagination = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { pages, residentsInPage } = paginationLogic(currentPage, residents);

  useEffect(() => {
    setCurrentPage(1);
  }, [residents]);

  return (
    <>
      {" "}
      <section className=" py-8 grid grid-cols-[repeat(auto-fit,300px)] justify-center gap-12  md:grid-cols-[repeat(2,350px)] ">
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentEndpoint={resident} />
        ))}
      </section>
      <section className="sm:pt-10 max-w-screen-sm pb-10 mx-auto">
        <ul className="flex flex-wrap gap-5 justify-center ">
          {pages.map((page) => (
            <li key={page}>
              <button
                onClick={() => setCurrentPage(page)}
                className={`h-10 w-10 hover:bg-[#062226] transition-colors rounded-md font-bold  ${
                  page === currentPage && "bg-[#062226]"
                }`}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default Pagination;
