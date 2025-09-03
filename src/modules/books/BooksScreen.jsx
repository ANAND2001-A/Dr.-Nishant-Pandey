import React from 'react';
import BookCard from './components/BookCard.jsx';
import FilterSidebar from './components/FilterSidebar.jsx';
import BookDetailModal from './components/BookDetailModal.jsx';
import { useBooks } from './Book.provider.jsx';
import ErrorBoundary from '../../core/components/ErrorBoundary.jsx';
import Loader from '../../core/components/ui/Loader.jsx';

export default function BooksScreen() {
    const { books, loading, error, selectedBook, setSelectedBook, fetchBooks } = useBooks();
  
    React.useEffect(() => {
      fetchBooks();
    }, [fetchBooks]);
  
    if (loading) return <Loader />;
    if (error) return <div className="p-4 text-red-600">Error loading books: {error}</div>;
  
  return (
    <ErrorBoundary>
      <section className="py-16">
        <div className="container mx-auto flex">
          <FilterSidebar />
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {books.map((book) => (
              <BookCard key={book.id} book={book} onClick={() => setSelectedBook(book)} />
            ))}
          </div>
          <BookDetailModal book={selectedBook} onClose={() => setSelectedBook(null)} />
        </div>
      </section>
    </ErrorBoundary>
  );
}