import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoriteContext from "../store/favorite-context";

function FavoriteMeetupPage() {
  const ctx = useContext(FavoriteContext);

  let content;

  if (ctx.totalFavorites === 0) {
    content = <p>No favorite yet...</p>;
  } else {
    content = <MeetupList meetups={ctx.favorites} />;
  }

  return (
    <section>
      <h1>My favorites</h1>
      {content}
    </section>
  );
}

export default FavoriteMeetupPage;
