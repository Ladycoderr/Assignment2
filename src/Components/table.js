import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function Table({ books }) {
  const [title, setTitle] = useState(true);
  return (
    <table class="table table-secondary table-hover">
      <thead>
        <tr>
          <th scope="col" style={{ width: "40%" }}>
            {"Title & Sub Title"}
            <KeyboardArrowUpIcon
              onClick={() => setTitle(!title)}
              style={{ cursor: "Pointer" }}
            />
          </th>
          <th scope="col" style={{ width: "20%" }}>
            Author
          </th>
          <th scope="col" style={{ width: "15%" }}>
            Latest Publish Year
          </th>
          <th scope="col" style={{ width: "15%" }}>
            First Publish Year
          </th>
        </tr>
      </thead>
      <tbody>
        {books && books.length > 0 ? (
          books.map((book) => {
            return (
              <tr>
                <td>
                  {title
                    ? book.title
                    : book.subtitle
                    ? book.subtitle
                    : book.title}
                </td>
                <td>{book.author_name && book.author_name[0]}</td>
                <td>{book.publish_year && Math.max(...book.publish_year)}</td>
                <td>{book.first_publish_year}</td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </tbody>
    </table>
  );
}

export default Table;
