import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import MOCK_DATA from "../../MOCK_DATA.json";

export const PaginationTable = () => {
  //   const columns = useMemo(() => GROUPED_COLUMNS, []);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const tableInstance = useTable(
    { columns: columns, data: data },
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    prepareRow,
  } = tableInstance;

  const { pageIndex, pageSize } = state;
  return (
    <>
      <table
        className="table table-bordered table-striped"
        {...getTableProps()}
      >
        <thead className="table-info">
          {headerGroups.map((m) => {
            return (
              <tr {...m.getHeaderGroupProps()}>
                {m.headers.map((column) => {
                  return (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <span>
        Page
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>
      </span>
      <span>
        | Go to page: {""}
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(pageNumber);
          }}
        />
      </span>
      <select
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
      >
        {[10, 25, 50].map((pageSize) => {
          return (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          );
        })}
      </select>
      <button
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
      >{`<<`}</button>
      <button
        onClick={() => {
          previousPage();
        }}
        disabled={!canPreviousPage}
      >
        Previous
      </button>
      <button
        onClick={() => {
          nextPage();
        }}
        disabled={!canNextPage}
      >
        Next
      </button>
      <button
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      >{`>>`}</button>
    </>
  );
};
