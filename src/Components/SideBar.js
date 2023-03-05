import React from "react";

function SideBar({ fetchData }) {
  return (
    <div className="col-3">
      <h3 className="fw-bold mt-5 mb-3">Trending Subjects</h3>

      <div class="list-group border-0 mt-3" style={{ cursor: "pointer" }}>
        <button
          class="list-group-item border-0"
          onClick={() => fetchData("title", "Javascript")}
        >
          Javascript
        </button>
        <button
          class="list-group-item border-0"
          onClick={() => fetchData("title", "Harry Potter")}
        >
          Harry Potter
        </button>
        <button
          class="list-group-item border-0"
          onClick={() => fetchData("title", "Indian History")}
        >
          Indian History
        </button>
        <button
          class="list-group-item border-0"
          onClick={() => fetchData("title", "Crypto Currency")}
        >
          Crypto Currency
        </button>
        <button
          class="list-group-item border-0"
          onClick={() => fetchData("title", "Criminal Law")}
        >
          Criminal Law
        </button>
      </div>
    </div>
  );
}

export default SideBar;
