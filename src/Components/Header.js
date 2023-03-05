import react, { useState } from "react";

function Header({ fetchData, title, setTitle, query, setQuery }) {
  const [input, setInput] = useState("");
  //const [query, setQuery] = useState(null);
  return (
    <div>
      <div
        className="d-flex justify-content-center firstHalf"
        style={{
          borderBottom: "2px solid Black",
          height: "100px",
        }}
      >
        {!title ? (
          <div
            class="input-group ps-5 pt-4"
            style={{ width: "70%", height: "30px" }}
          >
            <button
              class="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ width: "100px" }}
            >
              {!query ? "Select" : query.toUpperCase()}
            </button>
            <ul class="dropdown-menu" style={{ width: "100px" }}>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setQuery("title")}
                >
                  TITLE
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setQuery("author")}
                >
                  AUTHOR
                </a>
              </li>
            </ul>
            <input
              type="text"
              class="form-control"
              aria-label="Text input with dropdown button"
              onChange={(e) => setInput(e.target.value)}
              style={{ border: "1px solid black" }}
            />
            <button onClick={() => fetchData(query, input)}>
              <i class="fa fa-search"></i>
            </button>
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <h2 className="pt-4">{title.toUpperCase()}</h2>
            <span
              onClick={() => setTitle(null)}
              style={{
                border: "0",
                backgroundColor: "white",
                cursor: "pointer",
                margin: "10px",
              }}
              className="pt-4"
            >
              <i class="fa fa-refresh" aria-hidden="true"></i>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
