import BoardItem from "./BoardItem";
import { useNavigate } from "react-router-dom";
export default function BoardList(props) {
  const navigate = useNavigate();
  function detailInfo(e, request_id) {
    e.preventDefault();

    navigate(`/boards/${request_id}`);
  }
  return (
    <div>
      {props.data.map((boardData) => {
        return (
          <div key={boardData.request_id}>
            <BoardItem data={boardData} showDetails={false} />
            <button onClick={(e) => detailInfo(e, boardData.request_id)}>
              Details
            </button>
          </div>
        );
      })}
    </div>
  );
}
