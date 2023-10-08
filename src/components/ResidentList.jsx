import Pagination from "./Pagination";

const ResidentList = ({ residents }) => {
  return (
    <>
      {residents.length === 0 ? (
        <section className=" grid place-items-center h-[76.8vh] sm:h-[64.3vh] ">
          <h3 className="sm:text-[3rem] text-xl sm:pt-24">
            No residents alive...{" "}
          </h3>
        </section>
      ) : (
        <section className="bg-[url('/bg-main.jpg')] bg-top sm:bg-current">
          <Pagination residents={residents} />
        </section>
      )}
    </>
  );
};
export default ResidentList;
