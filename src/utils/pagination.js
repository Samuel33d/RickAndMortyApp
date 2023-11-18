
const paginationLogic = (currentPage, residents) => {


    const RESIDENT_PER_PAGE = 6;

    const totalPages = Math.ceil(residents.length / RESIDENT_PER_PAGE)

    const sliceEnd = RESIDENT_PER_PAGE * currentPage;
    const sliceStart = sliceEnd - RESIDENT_PER_PAGE
    const residentsInPage = residents.slice(sliceStart, sliceEnd)

    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }


    return {
        residentsInPage,
        pages,
    };
}

export {
    paginationLogic,
}