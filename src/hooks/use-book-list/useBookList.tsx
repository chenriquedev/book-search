import { useCallback, useState } from "react";
import { BookModel } from "../../models/bookModel";
import { bookService } from "../../service/resources/bookService";

const { getBooks } = bookService;

function useBookList() {
  const [books, setBooks] = useState<BookModel[]>([]);

  const fetchBooks = useCallback(async (name?: string): Promise<void> => {
    const { data } = await getBooks({ query: name });
    setBooks(data.hits);
  }, []);

  return {
    bookList: books,
    fetchBooks,
  };
}

export default useBookList;
