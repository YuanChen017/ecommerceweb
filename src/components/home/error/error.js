import Vector from "../error/Vector.png";
import { useDispatch } from "react-redux";
import { checkerror } from "../../../actions/statecheck";
import "./error.css";
const Errorpage = () => {
  const dispatch = useDispatch();
  return (
    <div className="errorpage">
      <div className="erroritem">
        <img src={Vector} alt="error_image" />
        <p>Oops, something went wrong!</p>
        <button
          onClick={() => {
            checkerror(dispatch)(false);
          }}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};
export default Errorpage;
