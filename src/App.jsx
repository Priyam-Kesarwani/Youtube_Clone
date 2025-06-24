import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Search from "./components/Search.jsx";
import PlayingVideo from "./components/PlayingVideo.jsx";
import Loading from "./loader/Loading.jsx";
import { useAuth } from "./context/AuthProvider.jsx";


const App = () => {
  const {loading} = useAuth();

  return (
    <div>
      {loading &&  <Loading />}
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
      </Routes>
    </div>
  );
};

export default App;
