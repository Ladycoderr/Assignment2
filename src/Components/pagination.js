import React, { useEffect, useState } from "react";


function Pagination({ query, title, fetchData, offset, setOffset,books }) {
  // useEffect(() => {
  //   fetchData(query, title);
  // }, [offset]);
  return (
    <div>
      <div className="buttonn d-flex justify-content-between">
        <span className="buttonn-left">
          <button
            type="button"
            class="btn btn-dark"
            disabled={offset === 0 ? true : false}
            onClick={async () => {
              setOffset(offset - 10);
              fetchData(query, title, offset - 10);
            }}
          >
            Previous
          </button>
        </span>

        <span className="buttonn-right">
          <button
            type="button"
            class="btn btn-dark"
              disabled={books.length < 10 ? true : false}
              onClick={async () => {
              setOffset(offset + 10);
              fetchData(query, title, offset + 10);
            }}
          >
            Next
          </button>
        </span>
      </div>
    </div>
  );
}

export default Pagination;
