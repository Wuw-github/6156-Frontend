import { Route, Routes } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetup";
import NewMeetupPage from "./pages/NewMeetup";
import FavoriteMeetupPage from "./pages/FavoriteMeetup";
import Layout from "./components/layout/Layout";
import AllBoardsPage from "./pages/boards/AllBoardPage";
import BoardDetailPage from "./pages/boards/BoardDetailPage";
import NewBoardPage from "./pages/boards/NewBoardPage";
import UpdateBoardPage from "./pages/boards/UpdateBoardPage";
import LoginPage from "./pages/login/LoginPage";

function App() {
  // localhost:3000/
  // my-page.com/

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoriteMeetupPage />} />
        <Route path="/boards" element={<AllBoardsPage />} />
        <Route path="/boards/:board_id" element={<BoardDetailPage />} />
        <Route path="/boards/create" element={<NewBoardPage />} />
        <Route path="/updateBoard" element={<UpdateBoardPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
