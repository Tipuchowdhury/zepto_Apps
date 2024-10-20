import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Wishlist from './pages/Wishlist';
import BookList from './Components/BookList';
import BookDetail from './Components/BookDetail';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<BookList />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Routes>
      </Router>
    </>
  );

}

export default App;
