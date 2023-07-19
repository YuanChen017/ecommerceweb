import "./signupmodal.css";
import { useState, useRef } from "react";
import { personalProjectApi, emailReg } from "../../../common/accapi";
import { checksign, checklogin } from "../../../actions/statecheck";
import { useDispatch } from "react-redux";
const Signupmodal = () => {
  const [signupemail, setsignupemail] = useState("");
  const [signuppassword, setsignuppassword] = useState("");
  const validation = useRef(null);
  const dispatch = useDispatch();
  const signupacc = () => {
    let didsignup = "";
    personalProjectApi
      .signUp({ email: signupemail, password: signuppassword })
      .then((response) =>
        response.json().then((res) => {
          didsignup = res.status;
          console.log(didsignup);
          if (didsignup === true) {
            alert(res.message);
          }
        })
      )
      .catch((e) => {
        alert(e.message);
      });
  };
  const valid = () => {
    const inputid = document.getElementById(validation.current.id);
    const errortext = document.getElementById("valid");
    setsignupemail(validation.current.value);
    if (emailReg.test(validation.current.value)) {
      inputid.style.borderColor = "black";
      inputid.style.outlineColor = "black";
      errortext.style.display = "none";
      console.log("valid");
    } else {
      inputid.style.outlineColor = "red";
      inputid.style.borderColor = "red";
      errortext.style.display = "block";
      console.log("not valid");
    }
  };
  return (
    <div className="modalborder">
      <div className="title">
        <h1>Sign up an account</h1>
        <button
          id="closebutton"
          onClick={() => {
            checksign(dispatch)(false);
          }}
        >
          {" "}
          X{" "}
        </button>
      </div>
      <div className="mainmodal">
        <label for="email">Email</label>
        <br />
        <input
          type="email"
          ref={validation}
          name="email"
          id="email"
          value={signupemail}
          onChange={(e) => setsignupemail(e.target.value)}
          onBlur={valid}
        />
        <br />
        <p id="valid">Invaild Email Input!</p>
        <label for="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          value={signuppassword}
          onChange={(e) => setsignuppassword(e.target.value)}
        />
        <br />
        <button id="signup" onClick={signupacc}>
          Create account
        </button>
        <div id="modifyaccount">
          <p>
            Already have and account{" "}
            <a
              onClick={() => {
                checksign(dispatch)(false);
                checklogin(dispatch)(true);
              }}
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Signupmodal;
