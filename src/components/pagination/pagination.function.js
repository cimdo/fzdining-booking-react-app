import { PaginationContainer } from "./pagination.styles";

export function generatePagination(pageNumber, currentPage, onClick) {
  let result = [];

  for (let i = 1; i <= pageNumber; i++) {
    result.push(
      <>
        {i === 1 && <PaginationContainer disabled={currentPage === 1} onClick={() => onClick(currentPage-1)}>&laquo;</PaginationContainer>}
        <PaginationContainer active={i === currentPage ?? true} onClick={()=>onClick(i)}>{i}</PaginationContainer>
        {i === pageNumber && <PaginationContainer disabled={currentPage === pageNumber}  onClick={()=>onClick(currentPage+1)}>&raquo;</PaginationContainer>}
      </>
    );
  }

  return result;
}
