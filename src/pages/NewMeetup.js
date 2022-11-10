import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetupPage() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    console.log(meetupData);
    fetch("http://localhost:8000/add", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/", { replace: true });
    });
  }

  return (
    <section>
      <h1>New Meetsup Page</h1>
      <NewMeetupForm addMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
