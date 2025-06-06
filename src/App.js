import Home from "./components/Home/Home.js";
import Container from "./components/Container/Container.js";
import NavBar from "./components/NavBar/NavBar.js";
import About from "./components/About/About.js";
import Favorite from "./components/Favorite/Favorite.js";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound.js";
import List from "./components/List/List.js"

const App = () => {
  return (
    <main>
    <NavBar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/list/:listId" element={<List />} />
        </Routes>
      </Container>
    </main>  
  );
};

export default App;
