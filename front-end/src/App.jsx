import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import FavoriteForm from "../src/Components/FavoriteForm";
import NavBar from "../src/Components/NavBar";
import ShowFavorites from "../src/Pages/ShowFavorites";
import FourOFour from "../src/Pages/FourOFour";
import Home from "../src/Pages/Home";
import Index from "../src/Pages/Index";
import New from "../src/Pages/New";
import Show from "../src/Pages/Show";

function App() {
  return (
    <div className="App">
      <Router>
       <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Index />} />
            <Route path="/movies/new" element={<New />} />
            <Route exact path="/movies/:id" element={<Show />} />
            <Route path="/movies/:id/favorites" element={<ShowFavorites />} />
            {/* <Route path="/movies/:id/favorites/new" element={<FavoriteForm />} /> */}
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
