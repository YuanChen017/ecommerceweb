import "./resetmodal.css";
import { useState } from "react";
import { personalProjectApi } from "../../../common/accapi";
import { useDispatch } from "react-redux";
import { checkemail, checkPwreset } from "../../../actions/statecheck";

const ResetModal = () => {
  const [existemail, setExistemail] = useState("");
  const dispatch = useDispatch();
  const checkexisted = () => {
    let checkresult = "";
    personalProjectApi
      .emailcheck({ email: existemail })
      .then((response) =>
        response.json().then((res) => {
          checkresult = res.status;
          console.log(checkresult);
          if (checkresult === true) {
            checkemail(dispatch)(true);
          }
        })
      )
      .catch((e) => {
        alert(e.message);
      });
  };
  return (
    <div className="modalborder">
      <div className="title">
        <h1>Update your password</h1>
        <button id="closebutton" onClick={() => checkPwreset(dispatch)(false)}>
          {" "}
          X{" "}
        </button>
      </div>
      <div className="mainmodal">
        <label for="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          value={existemail}
          onChange={(e) => setExistemail(e.target.value)}
        />
        <br />
        <button id="updatepw" onClick={checkexisted}>
          Update password
        </button>
      </div>
    </div>
  );
};
export default ResetModal;
