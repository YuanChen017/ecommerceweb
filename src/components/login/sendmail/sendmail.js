import "./sendmail.css";
import maillogo from "../sendmail/Vector.png";
import { useDispatch } from "react-redux";
import { checkemail, checklogin } from "../../../actions/statecheck";

const Sendmail = () => {
  const dispatch = useDispatch();
  return (
    <div className="modalborder-mail">
      <div className="title">
        <button
          id="closebutton"
          onClick={() => {
            checklogin(dispatch)(true);
            checkemail(dispatch)(false);
          }}
        >
          {" "}
          X{" "}
        </button>
      </div>
      <div className="mainmodal-mail">
        <img src={maillogo} />
        <p>
          We have sent the update password link to your emial, please check that
          ！
        </p>
      </div>
    </div>
  );
};
export default Sendmail;
