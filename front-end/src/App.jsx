import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Favorites from './Components/Favorites';
import NavBar from "./Components/NavBar";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

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
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/favorites/:id" element={<ShowFavorites />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
