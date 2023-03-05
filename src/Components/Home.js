import react, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import "./Home.css";
import Table from "./table";
import Pagination from "./pagination";
import Header from "./Header";
function Home({ fetchData, books, title, setTitle, offset, setOffset }) {
  const [query, setQuery] = useState("title");
  return (
    <div
      className="frontend"
      style={{ borderLeft: "2px solid black", minHeight: "100vh" }}
    >
      <Header
        fetchData={fetchData}
        setTitle={setTitle}
        title={title}
        query={query}
        setQuery={setQuery}
      />

      {books ? (
        (books.length > 0 || offset > 0) ? (
          <div className="table">
            <Table books={books} />
          </div>
        ) : (
          <h1 className="mt-5">Oops! Nothing Matches</h1>
        )
      ) : (
        <Button className="mt-5" variant="dark" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
          variant="light"
        />
        Loading...
      </Button>
      )}


      {books && books.length > 0 && (
        <Pagination
          fetchData={fetchData}
          title={title}
          query={query}
          offset={offset}
          setOffset={setOffset}
          books={books}
        />
      )}
    </div>
  );
}
export default Home;
