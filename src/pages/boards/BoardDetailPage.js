import BoardItem from "../../components/boards/BoardItem";
import ParticipantList from "../../components/boards/ParticipantList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function BoardDetailPage(props) {
  const [loadedBoard, setLoadedBoard] = useState([]);
  const [joined, setJoined] = useState(false);
  const [participantElement, setParticipantElement] = useState();
  const navigate = useNavigate();

  const { board_id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5011/requests/${board_id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoadedBoard(data.data[0]);
      });
  }, [board_id]);

  function updateHandler() {
    navigate("/updateBoard", { state: { id: board_id, data: loadedBoard } });
  }

  useEffect(() => {
    console.log("toggle");
    setParticipantElement(
      <ParticipantList request_id={board_id} joined={joined} />
    );
  }, [joined]);

  function joinHandler() {
    fetch(`http://localhost:5011/requests/${board_id}/participants`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((rsp) => {
        console.log(rsp);
        setJoined(true);
        console.log(joined);
      });
  }

  function leaveHandler() {
    fetch(`http://localhost:5011/requests/${board_id}/participants`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((rsp) => {
        console.log(rsp);
        setJoined(false);
        console.log(joined);
      });
  }

  return (
    <div>
      <h1>Detail Information Page {board_id}</h1>
      <BoardItem showDetails={true} data={loadedBoard} />
      <button className="btn" onClick={updateHandler}>
        Edit
      </button>
      <button className="btn" onClick={() => navigate("/boards")}>
        Back
      </button>
      {joined ? (
        <button className="btn" onClick={leaveHandler}>
          Leave List
        </button>
      ) : (
        <button className="btn" onClick={joinHandler}>
          Join
        </button>
      )}

      {participantElement}
    </div>
  );
}
