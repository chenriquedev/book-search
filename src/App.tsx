import { useEffect, useState } from "react";
import Search from "./components/search/Search";
import "./app.css";
import Container from "./components/layout/container/Container";
import NavBar from "./components/layout/navBar/NavBar";
import Card from "./components/card/Card";
import useBookList from "./components/hooks/use-book-list/useBookList";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { bookList, fetchBooks } = useBookList();

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchBooks(searchTerm);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [fetchBooks, searchTerm]);

  return (
    <Container>
      <NavBar title={import.meta.env.VITE_APPLICATION_TITLE}>
        <Search
          placeholder="Buscar..."
          searchInput={searchTerm}
          setSearchInput={setSearchTerm}
        />
      </NavBar>
      <div className="div-card">
        {bookList.map((item, key) => (
          <Card key={key} data={item} />
        ))}
      </div>
    </Container>
  );
}

export default App;
